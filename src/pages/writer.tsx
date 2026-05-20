import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ToMigrate from "./subpages/toMigrate"; // Adjust this path if ToMigrate.jsx is in a different directory

export default function Writer() {
  return (
    <Routes>
      {/* This renders at the base path: /writer */}
      <Route
        index
        element={
          <div className="text-center" style={{ padding: "40px 20px" }}>
            <h1 className="mb-4 underline">כתבים</h1>

            <div style={{ marginTop: "20px" }}>
              <Link
                to="tomigrate"
                className="text-primary fs-5 text-decoration-underline"
              >
                "לנדוד"
              </Link>
            </div>
          </div>
        }
      />

      {/* This renders at the nested path: /writer/tomigrate */}
      <Route
        path="tomigrate"
        element={
          <div className="container my-4">
            <div style={{ marginBottom: "20px" }}>
              <Link
                to="/writer"
                className="btn btn-link text-decoration-none"
                style={{ fontSize: "1rem", paddingRight: 0 }}
              >
                ← חזרה לעמוד הסופר
              </Link>
            </div>

            {/* The Story Component */}
            <ToMigrate />
          </div>
        }
      />
    </Routes>
  );
}
