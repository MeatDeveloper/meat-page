import { ImageResponse } from "next/og"
import { env } from "env.mjs"

export const runtime = "edge"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

const url = env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

export function IntegrationOgImage(
) {

  return async function Image() {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            backgroundImage:
              "linear-gradient(to bottom right, #FFF 25%, #FFF0CA 75%)",
          }}
        >
          <img
            alt="MEAT Logo"
            src={"/logo-gradient.png"}
            style={{ borderRadius: "9999px" }}
            tw="w-32 h-32 mb-2 opacity-95"
          />
          
        </div>
      ),
      {
        fonts: [
          {
            name: "SF Pro",
            data: await fetch(
              new URL(
                "../../../assets/fonts/SF-Pro-Display-Medium.otf",
                import.meta.url
              )
            ).then((res) => res.arrayBuffer()),
          },
        ],
      }
    )
  }
}
