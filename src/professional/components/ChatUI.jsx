function ChatUI({ profiles, activeChat, setActiveChat, onClose }) {
  return (
    <>
      {!activeChat ? (
        <>
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="font-semibold">Chats</h2>
            {onClose && (
              <button onClick={onClose} className="text-xl">✕</button>
            )}
          </div>

          {profiles.map((user) => (
            <div
              key={user.id}
              onClick={() => setActiveChat(user)}
              className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-100"
            >
              <img src={user.img} className="w-10 h-10 rounded-full" />
              <div>
                <h4 className="font-medium">{user.name}</h4>
                <p className="text-xs text-gray-500">Tap to chat</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3 p-3 border-b">
            <button onClick={() => setActiveChat(null)}>←</button>
            <img src={activeChat.img} className="w-8 h-8 rounded-full" />
            <h3 className="font-semibold">{activeChat.name}</h3>
          </div>

          <div className="flex-1 p-3 bg-gray-50">
            <div className="bg-white p-2 rounded w-fit mb-2">Hi 👋</div>
            <div className="bg-green-500 text-white p-2 rounded w-fit ml-auto">
              Hello!
            </div>
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded-full px-3 py-1"
              placeholder="Message"
            />
            <button className="bg-green-500 text-white px-4 rounded-full">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
