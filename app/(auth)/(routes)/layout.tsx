export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="flex items-center justify-center h-full">{children}</section>
  }