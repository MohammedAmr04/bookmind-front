import {
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from "next-intl";

type Props = {
  children: React.ReactNode;
};

export default function NextIntlProvider({ children }: Props) {
  const locale = useLocale();
  const messages = useMessages();
  const now = useNow();
  const timeZone = useTimeZone();
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      now={now}
      timeZone={timeZone}
    >
      {children}
    </NextIntlClientProvider>
  );
}
