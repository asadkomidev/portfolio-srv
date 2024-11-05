import { useTheme } from "next-themes";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

export const Logo: FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      {theme === "dark" ? (
        <Image src="/logo-light.png" alt="logo" width={30} height={30} />
      ) : (
        <Image src="/logo-dark.png" alt="logo" width={30} height={30} />
      )}
    </div>
  );
};
