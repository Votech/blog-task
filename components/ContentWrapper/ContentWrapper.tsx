interface Props {
  children: React.ReactNode;
}

export default function ContentWrapper({ children }: Props) {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full max-w-4xl px-6 md:px-10 lg:px-0">{children}</div>
    </div>
  );
}
