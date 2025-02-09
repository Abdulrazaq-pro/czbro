"use client";
import { useState } from "react";

import React from "react";
import { Upload, Image as ImageIcon, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Info } from "lucide-react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [result,setResult] = useState("");

  const api_key = "Kw9Lcos9p3pgmikCs7h5";

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select an image.");
      return;
    }
    setLoading(true);
    setMessage("");

    try {
      // Convert file to base64
      const base64Image = await convertToBase64(file);

      const response = await fetch(
        `https://detect.roboflow.com/jaundice/1?api_key=${api_key}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          // Send the base64 image directly as the body
          body: base64Image,
        }
      );

      const data = await response.json();
      if (response.ok) {
        setMessage("Upload successful!");
        console.log("Detection results:", data);
        //  result = data?.predictions?.[0]?.confidence;
         setResult( data?.predictions?.[0]?.confidence);
        console.log("Detection results:", result);
      } else {
        setMessage(`Error: ${data.error || "Upload failed"}`);
      }
    } catch (error) {
      console.error("Upload error:", error);
      setMessage("Upload error, please try again.");
    }
    setLoading(false);
  };

  // Helper function to convert file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Remove the "data:image/jpeg;base64," prefix
        const base64String = reader.result.split(",")[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };


    const getSeverityInfo = (value) => {
      if (value === null) return {};
      const numValue = parseFloat(value);

      if (numValue <= 0.4) {
        return {
          level: "Critical",
          color: "rgb(239 68 68)", // red-500
          icon: AlertTriangle,
          bgColor: "rgb(254 242 242)", // red-50
          borderColor: "rgb(239 68 68)",
        };
      } else if (numValue <= 0.6) {
        return {
          level: "Low",
          color: "rgb(234 179 8)", // yellow-500
          icon: AlertCircle,
          bgColor: "rgb(254 249 195)", // yellow-50
          borderColor: "rgb(234 179 8)",
        };
      } else if (numValue <= 0.8) {
        return {
          level: "Minimal",
          color: "rgb(34 197 94)", // green-500
          icon: Info,
          bgColor: "rgb(240 253 244)", // green-50
          borderColor: "rgb(34 197 94)",
        };
      } else {
        return {
          level: "High",
          color: "rgb(147 51 234)", // purple-500
          icon: CheckCircle,
          bgColor: "rgb(250 245 255)", // purple-50
          borderColor: "rgb(147 51 234)",
        };
      }
    };

    // const handleFileChange = (e) => {
    //   const file = e.target.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //       setPreview(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // };

    // const handleUpload = () => {
    //   setLoading(true);
    //   // Simulate upload with random result
    //   setTimeout(() => {
    //     const randomResult = Math.random().toFixed(2);
    //     setLoading(false);
    //     setMessage("Analysis complete");
    //     setResult(randomResult);
    //   }, 2000);
    // };

    const severityInfo = getSeverityInfo(result);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-black flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="w-96 bg-black border border-green-500/20 rounded-2xl p-8 flex flex-col items-center gap-6"
      >
        <motion.div className="relative w-full" whileHover={{ scale: 1.02 }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className="border-2 border-dashed border-green-500/30 rounded-xl p-8 flex flex-col items-center gap-4 text-gray-400 hover:border-green-500/50 transition-colors">
            {preview ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-40 h-40 rounded-lg overflow-hidden"
              >
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : (
              <ImageIcon className="w-12 h-12 text-green-500/50" />
            )}
            <p className="text-sm">Drop your image here or click to browse</p>
          </div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleUpload}
          disabled={loading || !preview}
          className="bg-green-500 text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 disabled:bg-green-500/50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? (
            <>
              <Loader className="w-4 h-4 animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Upload className="w-4 h-4" />
              <span>Analyze Image</span>
            </>
          )}
        </motion.button>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-500 text-sm"
          >
            {message}
          </motion.p>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div
              className="rounded-xl p-4 flex items-center gap-3"
              style={{
                backgroundColor: severityInfo.bgColor,
                border: `1px solid ${severityInfo.borderColor}`,
              }}
            >
              {severityInfo.icon && (
                <severityInfo.icon
                  className="w-5 h-5"
                  style={{ color: severityInfo.color }}
                />
              )}
              <div>
                <p className="text-black font-medium">
                  {severityInfo.level} ({result})
                </p>
                <p className="text-sm text-gray-600">
                  Analysis shows {severityInfo.level.toLowerCase()} severity
                  level
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ImageUpload;
