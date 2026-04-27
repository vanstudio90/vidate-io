"use client";

import { useState, useEffect, useCallback } from "react";

interface Profile {
  id: string;
  display_name: string;
  gender: string;
  date_of_birth: string;
  city: string;
  is_active: boolean;
  is_verified: boolean;
  created_at: string;
  last_active: string;
  onboarding_completed: boolean;
  email: string | null;
  phone: string | null;
  provider: string | null;
}

interface Video {
  id: string;
  video_url: string;
  thumbnail_url: string;
  prompt: string;
  slot_number: number;
  moderation_status: string;
  duration_seconds: number;
}

interface Report {
  id: string;
  reporter_id: string;
  reason: string;
  description: string;
  status: string;
  created_at: string;
}

interface AuthInfo {
  email: string | null;
  phone: string | null;
  provider: string | null;
  providers: string[] | null;
  email_confirmed_at: string | null;
  last_sign_in_at: string | null;
  created_at: string | null;
}

interface UserDetail {
  profile: Record<string, unknown>;
  auth: AuthInfo | null;
  videos: Video[];
  reports: Report[];
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<Profile[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserDetail | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    const res = await fetch("/api/admin/users");
    if (res.ok) {
      const data = await res.json();
      setUsers(data);
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuthed(true);
      fetchUsers();
    } else {
      alert("Wrong password");
    }
  }

  async function viewUser(id: string) {
    setLoading(true);
    setSelectedUserId(id);
    const res = await fetch(`/api/admin/users?id=${id}`);
    if (res.ok) setSelectedUser(await res.json());
    setLoading(false);
  }

  async function deleteUser(id: string) {
    if (!confirm(`Delete user ${id}? This cannot be undone.`)) return;
    setDeleting(id);
    await fetch("/api/admin/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id }),
    });
    setUsers(users.filter((u) => u.id !== id));
    if (selectedUserId === id) {
      setSelectedUser(null);
      setSelectedUserId(null);
    }
    setDeleting(null);
  }

  function age(dob: string) {
    if (!dob) return "?";
    const diff = Date.now() - new Date(dob).getTime();
    return Math.floor(diff / 31557600000);
  }

  const filtered = users.filter(
    (u) =>
      (u.display_name || "").toLowerCase().includes(search.toLowerCase()) ||
      (u.email || "").toLowerCase().includes(search.toLowerCase()) ||
      (u.city || "").toLowerCase().includes(search.toLowerCase()) ||
      u.id.includes(search)
  );

  if (!authed) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <form onSubmit={login} className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-sm">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Vidate Admin</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-pink-500 focus:outline-none mb-4"
          />
          <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90">
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="flex h-screen">
        {/* Sidebar - User List */}
        <div className="w-96 border-r border-gray-800 flex flex-col">
          <div className="p-4 border-b border-gray-800">
            <h1 className="text-xl font-bold mb-3">Vidate Admin</h1>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search users..."
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-pink-500 focus:outline-none text-sm"
            />
            <p className="text-gray-500 text-xs mt-2">{filtered.length} users</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            {filtered.map((u) => (
              <div
                key={u.id}
                onClick={() => viewUser(u.id)}
                className={`p-3 border-b border-gray-800/50 cursor-pointer hover:bg-gray-900 transition ${
                  selectedUserId === u.id ? "bg-gray-800" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{u.display_name || "No name"}</span>
                    <span className="text-gray-400 text-sm ml-2">{age(u.date_of_birth)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!u.onboarding_completed && (
                      <span className="text-xs px-2 py-0.5 rounded bg-yellow-900 text-yellow-300">incomplete</span>
                    )}
                    {u.is_active ? (
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-gray-600" />
                    )}
                  </div>
                </div>
                {u.email && (
                  <div className="text-xs text-gray-400 mt-0.5 truncate">{u.email}</div>
                )}
                <div className="text-xs text-gray-500 mt-0.5">
                  {u.city || "No location"} · {u.gender} · {new Date(u.created_at).toLocaleDateString()}
                  {u.provider && u.provider !== "email" && (
                    <span className="ml-1 text-blue-400">· {u.provider}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main - User Detail */}
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-full text-gray-500">Loading...</div>
          ) : selectedUser ? (
            <div className="p-6 max-w-4xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {(selectedUser.profile as Record<string, unknown>).display_name as string || "No name"}
                </h2>
                <button
                  onClick={() => deleteUser(selectedUserId!)}
                  disabled={deleting === selectedUserId}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium disabled:opacity-50"
                >
                  {deleting === selectedUserId ? "Deleting..." : "Delete User"}
                </button>
              </div>

              {/* Auth Info */}
              {selectedUser.auth && (
                <div className="bg-gray-900 rounded-xl p-5 mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-pink-400">Account</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex">
                      <span className="text-gray-500 w-48 shrink-0">email</span>
                      <span className="text-gray-200">{selectedUser.auth.email || "—"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-48 shrink-0">phone</span>
                      <span className="text-gray-200">{selectedUser.auth.phone || "—"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-48 shrink-0">provider</span>
                      <span className="text-gray-200">{selectedUser.auth.providers?.join(", ") || "—"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-48 shrink-0">email_confirmed</span>
                      <span className="text-gray-200">{selectedUser.auth.email_confirmed_at ? new Date(selectedUser.auth.email_confirmed_at).toLocaleString() : "No"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-48 shrink-0">last_sign_in</span>
                      <span className="text-gray-200">{selectedUser.auth.last_sign_in_at ? new Date(selectedUser.auth.last_sign_in_at).toLocaleString() : "—"}</span>
                    </div>
                    <div className="flex">
                      <span className="text-gray-500 w-48 shrink-0">auth_created</span>
                      <span className="text-gray-200">{selectedUser.auth.created_at ? new Date(selectedUser.auth.created_at).toLocaleString() : "—"}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Profile Info */}
              <div className="bg-gray-900 rounded-xl p-5 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-pink-400">Profile</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {Object.entries(selectedUser.profile).map(([key, val]) => (
                    <div key={key} className="flex">
                      <span className="text-gray-500 w-48 shrink-0">{key}</span>
                      <span className="text-gray-200 break-all">
                        {val === null ? <span className="text-gray-600">null</span> : String(val)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Videos */}
              <div className="bg-gray-900 rounded-xl p-5 mb-6">
                <h3 className="text-lg font-semibold mb-3 text-pink-400">
                  Videos ({selectedUser.videos.length})
                </h3>
                {selectedUser.videos.length === 0 ? (
                  <p className="text-gray-500 text-sm">No videos uploaded</p>
                ) : (
                  <div className="grid grid-cols-3 gap-4">
                    {selectedUser.videos.map((v) => (
                      <div key={v.id} className="bg-gray-800 rounded-lg overflow-hidden">
                        <video
                          src={v.video_url}
                          poster={v.thumbnail_url}
                          controls
                          className="w-full aspect-[9/16] object-cover"
                        />
                        <div className="p-3 text-xs">
                          <p className="text-gray-300 mb-1">Slot {v.slot_number}</p>
                          <p className="text-gray-500">{v.prompt}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-gray-400">{v.duration_seconds?.toFixed(1)}s</span>
                            <span
                              className={`px-2 py-0.5 rounded ${
                                v.moderation_status === "approved"
                                  ? "bg-green-900 text-green-300"
                                  : v.moderation_status === "rejected"
                                  ? "bg-red-900 text-red-300"
                                  : "bg-yellow-900 text-yellow-300"
                              }`}
                            >
                              {v.moderation_status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Reports */}
              <div className="bg-gray-900 rounded-xl p-5">
                <h3 className="text-lg font-semibold mb-3 text-pink-400">
                  Reports ({selectedUser.reports.length})
                </h3>
                {selectedUser.reports.length === 0 ? (
                  <p className="text-gray-500 text-sm">No reports</p>
                ) : (
                  <div className="space-y-3">
                    {selectedUser.reports.map((r) => (
                      <div key={r.id} className="bg-gray-800 rounded-lg p-3 text-sm">
                        <div className="flex justify-between">
                          <span className="font-medium text-red-400">{r.reason}</span>
                          <span className="text-gray-500">{new Date(r.created_at).toLocaleDateString()}</span>
                        </div>
                        {r.description && <p className="text-gray-400 mt-1">{r.description}</p>}
                        <p className="text-xs text-gray-600 mt-1">By: {r.reporter_id}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              Select a user to view details
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
