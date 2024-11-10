import React, { ReactHTMLElement } from 'react';

export default function Layout({ children }:{children:string}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="p-4 bg-blue-600 text-white">
        <nav className="container mx-auto flex justify-between">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <div className="flex space-x-4">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </header>
      <main className="container mx-auto flex-1 p-4">
        {children}
      </main>
      <footer className="p-4 bg-blue-600 text-white text-center">
        © 2023 My Portfolio
      </footer>
    </div>
  );
}