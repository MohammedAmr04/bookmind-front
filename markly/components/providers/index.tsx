import NextIntlProvider from "./components/next-intl.provider";
import ReactQueryProvider from "./components/react-query-provider";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <NextIntlProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextIntlProvider>
  );
}
