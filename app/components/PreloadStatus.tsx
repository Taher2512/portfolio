"use client";

import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";

interface PreloadStatusProps {
  loadedCount: number;
  totalCount: number;
  isLoading: boolean;
  className?: string;
}

const PreloadStatus = ({
  loadedCount,
  totalCount,
  isLoading,
  className = "",
}: PreloadStatusProps) => {
  const progress = totalCount > 0 ? (loadedCount / totalCount) * 100 : 0;
  const isComplete = loadedCount >= totalCount;

  if (!isLoading && isComplete) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed bottom-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg z-50 ${className}`}
    >
      <div className="flex items-center gap-2 text-sm">
        {isLoading && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <FiLoader className="text-primary" />
          </motion.div>
        )}
        <span className="text-muted-foreground">
          {isComplete
            ? "Images ready"
            : `Loading images ${loadedCount}/${totalCount}`}
        </span>
      </div>

      {!isComplete && (
        <div className="mt-2 w-24 h-1 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </motion.div>
  );
};

export default PreloadStatus;
