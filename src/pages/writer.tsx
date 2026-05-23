import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ToMigrate from "./subpages/toMigrate";
import toMigrateBg from "../assets/toMigrateBg.jpeg"; // Adjust path to your image

export default function Writer() {
  const stories = [
    {
      id: "tomigrate",
      title: "לנדוד",
      image: toMigrateBg,
    },
    // Add more stories here in the future
  ];

  return (
    <Routes>
      <Route
        index
        element={
          <div style={{ padding: "40px 20px" }}>
            <h1 className="mb-4 text-center underline">כתבים</h1>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "30px",
                paddingRight: "20px",
              }}
            >
              {stories.map((story) => (
                <Link
                  key={story.id}
                  to={story.id}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "300px",
                      height: "150px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      backgroundImage: `url(${story.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      border: "4px solid black",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  >
                    {/* Grayscale overlay */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }}
                    />

                    {/* Story title */}
                    <div
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "40px",
                        fontWeight: "bold",
                        color: "white",
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        textAlign: "center",
                        WebkitTextStroke: "2px black",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      {story.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        }
      />
      <Route path="tomigrate" element={<ToMigrate />} />
    </Routes>
  );
}
