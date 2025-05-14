import React from 'react';
import { useNavigate } from 'react-router-dom';

const SearchCard = ({ 
  title, 
  steps, 
  imageUrl, 
  imageAlt, 
  buttonText = "Mulai Pencarian", 
  buttonIcon = "rightarrow.png" 
}) => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", padding: "24px 0" }}>
      <div
        style={{
          maxWidth: "56rem",
          margin: "0 auto",
          padding: "0 1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "2rem", alignItems: "center" }}>
          {/* Image Card Container */}
          <div style={{ width: "50%", maxWidth: "493px" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "0.5rem",
                overflow: "hidden",
                height: "248px",
              }}
            >
              {/* Image */}
              <img
                src={imageUrl}
                alt={imageAlt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                }}
              />

              {/* Button Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                }}
              >
                <div
                  style={{
                    backgroundColor: "rgba(217, 217, 217, 0.7)",
                    backdropFilter: "blur(4px)",
                    width: "100%",
                    height: "77px",
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "0 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "background-color 0.3s",
                      backgroundColor: "rgba(248, 181, 85, 0.7)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "rgba(248, 181, 85, 1)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "rgba(248, 181, 85, 0.7)")
                    }
                    onClick={() => navigate('/jobform')}
                  >
                    <span
                      style={{
                        color: "white",
                        fontWeight: "500",
                        fontSize: "1.25rem",
                        textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)",
                      }}
                    >
                      {buttonText}
                    </span>
                    <img
                      src={buttonIcon}
                      alt="arrow icon"
                      style={{
                        marginLeft: "8px",
                        width: "32px",
                        height: "32px",
                        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content (List) */}
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ flexDirection: "column" }}>
              <h2 style={{ color: "black" }}>{title}</h2>
              <ol style={{ paddingLeft: "20px" }}>
                {steps.map((step, index) => (
                  <li key={index} style={{ color: "black" }}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
