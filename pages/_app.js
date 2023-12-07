import "@/styles/globals.css";
import Baselayout from "@/components/layout/Baselayout";
import { CounterService } from "@/CounterService";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [updater, setUpdater] = useState({});

  CounterService.onUpdate = function () {
    setUpdater({ ...updater });
  };
  return (
    <Baselayout>
      <Component {...pageProps} />
    </Baselayout>
  );
}
