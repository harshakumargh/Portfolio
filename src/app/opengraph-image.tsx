import { ImageResponse } from "next/og";
import { impactMetrics } from "@/data/impact";
import { profile } from "@/data/profile";

export const alt = "Harsha Kumar, Senior Software Engineer: .NET, distributed systems and AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const metrics = impactMetrics.slice(0, 4);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(900px 500px at 85% -10%, rgba(122,162,255,0.22), transparent 70%), #0a0b0d",
          color: "#ecedef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              border: "2px solid rgba(122,162,255,0.5)",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700 }}>{profile.name}</div>
            <div style={{ fontSize: 22, color: "#a1a6b0" }}>
              {`${profile.headline} · ${profile.locationShort}`}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Building resilient distributed systems and intelligent software.
          </div>
          <div style={{ fontSize: 26, color: "#7aa2ff" }}>.NET · Distributed Systems · Azure & AWS · AI & Agentic Systems</div>
        </div>
        <div style={{ display: "flex", gap: 56, borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: 28 }}>
          {metrics.map((metric) => (
            <div key={metric.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 40, fontWeight: 700 }}>
                {`${metric.value}${metric.suffix}`}
              </div>
              <div style={{ fontSize: 20, color: "#a1a6b0" }}>{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
