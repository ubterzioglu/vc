import './globals.css';

export const metadata = {
  title: 'Vibecoding Community',
  description: 'Create, share, connect',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}