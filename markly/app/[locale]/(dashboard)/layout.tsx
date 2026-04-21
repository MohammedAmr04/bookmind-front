type Props = {
  children: React.ReactNode;
};

export default function LayoutDashboard({ children }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <aside className="col-span-1">Test sidebar</aside>
      <main className="col-span-2">{children}</main>
    </section>
  );
}
