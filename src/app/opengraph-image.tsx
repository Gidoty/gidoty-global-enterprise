import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Gidoty Global Enterprise";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#1B4332",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#FDFBF7",
            fontSize: 28,
            letterSpacing: 2,
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: "50%",
              backgroundColor: "#E85D04",
              display: "flex",
            }}
          />
          TEF Grantee, 2023
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              color: "#FDFBF7",
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            Gidoty Global Enterprise
          </div>
          <div
            style={{
              display: "flex",
              color: "#FDFBF7",
              opacity: 0.75,
              fontSize: 32,
              maxWidth: 800,
            }}
          >
            Premium pepper and plantain, cultivated in Rivers State, Nigeria.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
