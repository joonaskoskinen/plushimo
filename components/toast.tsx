"use client"

import { useEffect, useState } from "react"
import { X, CheckCircle2, Heart, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ToastProps {
  message: string
  type?: "success" | "wishlist" | "error"
  duration?: number
  onClose: () => void
}

export function Toast({ message, type = "success", duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onClose, 300)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-lg bg-background border shadow-lg p-4 transition-all duration-300 ${
        isVisible ? "animate-in slide-in-from-bottom-5" : "animate-out slide-out-to-bottom-5"
      }`}
    >
      {type === "success" && <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />}
      {type === "wishlist" && <Heart className="h-5 w-5 text-primary fill-primary flex-shrink-0" />}
      {type === "error" && <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />}
      <p className="text-sm font-medium">{message}</p>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 ml-2"
        onClick={() => {
          setIsVisible(false)
          setTimeout(onClose, 300)
        }}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}

export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: number; message: string; type: "success" | "wishlist" | "error" }>>(
    [],
  )

  const showToast = (message: string, type: "success" | "wishlist" | "error" = "success") => {
    const id = Date.now()
    setToasts((prev) => [...prev, { id, message, type }])
  }

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  const ToastContainer = () => (
    <>
      {toasts.map((toast, index) => (
        <div key={toast.id} style={{ bottom: `${24 + index * 80}px` }} className="fixed right-6">
          <Toast message={toast.message} type={toast.type} onClose={() => removeToast(toast.id)} />
        </div>
      ))}
    </>
  )

  return { showToast, ToastContainer }
}
