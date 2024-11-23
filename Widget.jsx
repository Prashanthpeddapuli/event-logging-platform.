export default function Widget() {
    return (
        
        
        <div className="bg-background text-foreground min-h-screen flex flex-col">
          <header className="bg-gradient-to-r from-blue-500 to-purple-600 py-4 px-6 flex justify-between items-center shadow-lg">
            <h1 className="text-2xl font-bold text-white">Event Logs Dashboard</h1>
            <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md transition-transform transform hover:scale-105">Logout</button>
          </header>
          <main className="flex-1 p-4">
            <table className="w-full bg-card shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-primary-foreground">
                  <th className="px-4 py-2 text-left">Event Type</th>
                  <th className="px-4 py-2 text-left">Timestamp</th>
                  <th className="px-4 py-2 text-left">Source App ID</th>
                  <th className="px-4 py-2 text-left">Data Payload</th>
                  <th className="px-4 py-2 text-left">Previous Hash</th>
                  <th className="px-4 py-2 text-left">Hash</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted transition-colors">
                  <td className="px-4 py-2">User Login</td>
                  <td className="px-4 py-2">2022-09-20 14:30:00</td>
                  <td className="px-4 py-2">App123</td>
                  <td className="px-4 py-2">{"user": "john_doe"}</td>
                  <td className="px-4 py-2">abc123def456</td>
                  <td className="px-4 py-2">789ghi012jkl</td>
                </tr>
              </tbody>
            </table>
          </main>
          <footer className="bg-gradient-to-r from-blue-500 to-purple-600 py-2 text-center text-sm">
            <p className="text-primary-foreground">&copy; 2022 Event Logging Platform. All rights reserved.</p>
          </footer>
        </div>
        
        
    )
}