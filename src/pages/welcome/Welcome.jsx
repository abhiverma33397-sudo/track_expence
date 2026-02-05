import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Img from "../../assets/images/img.png";

const messages = [
  "Save your money with a smart expense tracker",
  "Track every rupee, control your expenses",
  "Manage daily expenses without stress",
  "Your personal money manager in one app",
  "Spend wisely, save more every day",
  "Plan better, spend smarter",
  "Build better money habits",
];

function Welcome() {
  const randomText = messages[Math.floor(Math.random() * messages.length)];

  const handleGetStarted = () => {
    window.location.href = "/login";
  };

  useEffect(() => {
    const prev = document.body.style.overflow;
    const mq = window.matchMedia ? window.matchMedia('(max-width: 640px)') : null;
    const apply = (matches) => {
      if (matches) document.body.style.overflow = 'hidden';
      else document.body.style.overflow = prev;
    };

    apply(mq ? mq.matches : false);

    const handler = (e) => apply(e.matches);
    if (mq) {
      if (mq.addEventListener) mq.addEventListener('change', handler);
      else mq.addListener(handler);
    }

    return () => {
      if (mq) {
        if (mq.removeEventListener) mq.removeEventListener('change', handler);
        else mq.removeListener(handler);
      }
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .delay-1 { animation-delay: 0.2s; opacity: 0; }
        .delay-2 { animation-delay: 0.4s; opacity: 0; }
        .delay-3 { animation-delay: 0.6s; opacity: 0; }

        .float {
          animation: float 3s ease-in-out infinite;
        }

        .btn-primary {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(147, 51, 234, 0.4);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        /* Responsive tweaks */
        .welcome-root {
          min-height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
        }

        .welcome-wrap { width: 100%; max-width: 440px; }
        .welcome-card { background: white; border-radius: 32px; padding: 3rem 2rem; }
        .logo-wrap { padding: 1.5rem; position: relative; display: inline-block; }
        .logo-bg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 220px;
          height: 120px;
          background: radial-gradient(circle at 30% 30%, rgba(147,51,234,0.25) 0%, rgba(124,58,237,0.18) 30%, transparent 60%);
          border-radius: 24px;
          filter: blur(18px);
          z-index: 0;
          animation: float 4s ease-in-out infinite;
          pointer-events: none;
          opacity: 0.95;
        }
        .logo-img { width: 140px; height: auto; display: block; }
        .title { font-size: 2.25rem; }
        .subtitle { font-size: 1rem; }
        .feature-icon { width: 40px; height: 40px; font-size: 1.25rem; }

        @media (max-width: 640px) {
          /* keep card full-width but do not force full viewport height; restore gentle spacing and rounded corners */
          .welcome-root { padding: 0.5rem !important; align-items: center !important; }
          .welcome-wrap { max-width: 100% !important; padding: 0 0.25rem !important; }
          .welcome-card { padding: 1.5rem 1rem !important; border-radius: 18px !important; margin: 0.5rem 0 !important; width: 100% !important; min-height: auto !important; box-shadow: none !important; }
          .welcome-card > div { display: block; height: auto !important; justify-content: initial; }
          .logo-wrap { padding: 0.75rem 0 !important; }
          /* slightly larger image on mobile but not overflowing */
          .logo-img { width: 140px !important; }
          .title { font-size: 1.5rem !important; }
          .subtitle { font-size: 0.95rem !important; margin-bottom: 1.25rem !important; padding: 0 0.5rem !important; }
          .feature-icon { width: 34px !important; height: 34px !important; font-size: 1rem !important; }
          .btn-primary { padding: 0.85rem !important; font-size: 1rem !important; border-radius: 12px !important; box-shadow: none !important; }
        }

        @media (max-width: 420px) {
          .logo-img { width: 140px !important; }
          .logo-wrap { padding: 0.9rem !important; }
          .title { font-size: 1.15rem !important; }
          .subtitle { font-size: 0.95rem !important; }
        }
      `}</style>

      <div className="welcome-root" style={{
        minHeight: '100vh',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          top: '5%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, , transparent)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>

        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15), transparent)',
          borderRadius: '50%',
          filter: 'blur(40px)'
        }}></div>

        {/* Main Card */}
        <div className="welcome-wrap" style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '440px'
        }}>
          
          {/* White Card Container */}
          <div className="welcome-card" style={{
            background: 'white',
            borderRadius: '32px',
            padding: '3rem 2rem',
            boxShadow: '0 20px 60px rgba(147, 51, 234, 0.15), 0 0 0 1px rgba(147, 51, 234, 0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}>

            {/* Top Wave Decoration */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '120px',
              background: 'linear-gradient(135deg, #9333ea, #a855f7)',
              clipPath: 'ellipse(100% 100% at 50% 0%)',
              opacity: 0.1
            }}></div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              
              {/* Image Section */}
              <div className="fade-in-up delay-1" style={{
                textAlign: 'center',
                marginBottom: '2rem'
              }}>
                <div className="float logo-wrap" style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #9333ea, #a855f7)',
                  borderRadius: '24px',
                  padding: '1.5rem',
                  boxShadow: '0 10px 30px rgba(147, 51, 234, 0.3)'
                }}>
                  <div className="logo-bg" />
                  <img
                    src={Img}
                    alt="Expense Tracker"
                    className="logo-img"
                    style={{
                      width: '140px',
                      height: 'auto',
                      display: 'block',
                      position: 'relative',
                      zIndex: 2
                    }}
                  />
                </div>
              </div>

              {/* Welcome Badge */}
              <div className="fade-in-up delay-1" style={{
                textAlign: 'center',
                marginBottom: '1.5rem'
              }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  color: '#7c3aed',
                  fontWeight: 600
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    background: '#9333ea',
                    borderRadius: '50%',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}></span>
                  Welcome Back
                </span>
              </div>

              {/* Title */}
              <h1 className="fade-in-up delay-2 title" style={{
                fontSize: '2.25rem',
                fontWeight: 800,
                textAlign: 'center',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
                color: '#1e1b4b'
              }}>
                <span style={{
                  background: 'linear-gradient(135deg, #9333ea, #7c3aed)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Expense Tracker
                </span>
              </h1>

              {/* Subtitle */}
              <p className="fade-in-up delay-2 subtitle" style={{
                fontSize: '1rem',
                color: '#64748b',
                textAlign: 'center',
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                padding: '0 1rem'
              }}>
                {randomText}
              </p>

              {/* Features List */}
              <div className="fade-in-up delay-3" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem',
                  background: '#faf5ff',
                  borderRadius: '12px'
                }}>
                  <div className="feature-icon" style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #9333ea, #a855f7)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem'
                  }}>
                    💰
                  </div>
                  <div>
                    <div style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#1e1b4b'
                    }}>
                      Track Expenses
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>
                
                      Save More
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: '#64748b'
                    }}>
                      Achieve your goals
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Started Button */}
              <button
                onClick={handleGetStarted}
                className="fade-in-up delay-3 btn-primary"
                style={{
                  width: '100%',
                  padding: '1.125rem 2rem',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'white',
                  background: 'linear-gradient(135deg, #9333ea, #7c3aed)',
                  border: 'none',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(147, 51, 234, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                Get Started
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ marginTop: '2px' }}>
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Bottom Text */}
              <p className="fade-in-up delay-3" style={{
                textAlign: 'center',
                fontSize: '0.75rem',
                color: '#94a3b8',
                marginTop: '1.5rem'
              }}>
                Free to use • No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Firstpage() {
  const navigate = useNavigate();
  const randomText = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="min-h-screen flex items-center justify-center  px-3 px-sm-5">
      <div
        className="
          bg-white
          w-96
          
          max-w-sm
          sm:max-w-md
          rounded-2xl
          sm:px-6
          sm:py-8
          text-center
        "
      >
       
        <img
          src={Img}
          alt="Wallet"
          className="
            w-72
            sm:w-48
            md:w-56
            mx-auto
            mb-5
          "
        />

        <p
          className="
            font-serif
            text-xl
            sm:text-base
            md:text-lg
            text-purple-600
            mb-6
            
            px-1
          "
        >
          {randomText}
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/login")}
          className="
            w-64
            sm:w-56
            mx-auto
            block
            bg-purple-600
            text-white
            font-semibold
            py-2.5
            rounded-md
            hover:bg-purple-700
            transition
            text-sm
            sm:text-base
          "
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Welcome;
