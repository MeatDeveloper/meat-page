"use client"

import { PageHeader } from "@/components/layout/page-header"

export default function GamePage() {
  return (
    <div className="container relative">
      <iframe
        src="https://s27lh8-4567.csb.app/"
        style={{
          width: "100%",
          minHeight: "calc(100vh - 100px)",
          border: "0",
          borderRadius: "0px",
          overflow: "hidden",
        }}
        title="Sausagers In Space"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  )
}
