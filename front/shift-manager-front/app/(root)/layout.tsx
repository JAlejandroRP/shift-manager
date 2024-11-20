import React from 'react'

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen w-full flex-col lg:flex-row">
      {children}
    </main>
  )
}

export default layout