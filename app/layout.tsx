import '@/app/ui/global.css';
import { inter } from "@/app/ui/fonts";
import { Metadata } from 'next';
import { ThemeProvider } from "@/components/ThemeProvider"
 
export const metadata: Metadata = {
  title: {
    template: '%s | falcon-nextjs',
    default: 'falcon-nextjs',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${inter.className} antialiased` }>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}