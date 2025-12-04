import toast from "react-hot-toast";

// basic style shared by all toasts
const baseStyle = {
  background: "rgba(20, 20, 20, 0.85)",
  color: "#fff",
  backdropFilter: "blur(12px)",
  borderRadius: "16px",
  padding: "12px 20px",
  fontSize: "14px",
  fontWeight: "500",
  letterSpacing: "0.5px",
};

// Success toast (Green Neon Glow)
export const SuccessToast = (message) => {
  toast.success(message, {
    style: {
      ...baseStyle,
      border: "1px solid rgba(34, 197, 94, 0.3)",
      boxShadow: "0 4px 30px rgba(34, 197, 94, 0.2)",
    },
    iconTheme: {
      primary: "#22c55e",
      secondary: "#ffffff",
    },
  });
};

// Error Toast (Red Neon Glow)
export const ErrorToast = (message) => {
  toast.error(message, {
    style: {
      ...baseStyle,
      border: "1px solid rgba(239, 68, 68, 0.3)",
      boxShadow: "0 4px 30px rgba(239, 68, 68, 0.2)",
    },
    iconTheme: {
      primary: "#ef4444",
      secondary: "#ffffff",
    },
  });
};

// ৪. Info Toast (Blue)
export const InfoToast = (message) => {
  toast(message, {
    style: {
      ...baseStyle,
      border: "1px solid rgba(59, 130, 246, 0.3)",
      boxShadow: "0 4px 30px rgba(59, 130, 246, 0.2)",
    },
    icon: "ℹ️",
  });
};

//Loading Toast (Blue Glow)
export const LoadingToast = (message) => {
  return toast.loading(message, {
    style: {
      ...baseStyle,
      border: "1px solid rgba(59, 130, 246, 0.3)",
      boxShadow: "0 4px 30px rgba(59, 130, 246, 0.2)",
    },
  });
};
