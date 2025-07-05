import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(price)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
}

export function parseImageUrls(imagesString: string): string[] {
  try {
    return JSON.parse(imagesString) || []
  } catch {
    return []
  }
}

export function stringifyImageUrls(images: string[]): string {
  return JSON.stringify(images)
}

export function parseTags(tagsString: string): string[] {
  try {
    return JSON.parse(tagsString) || []
  } catch {
    return []
  }
}

export function stringifyTags(tags: string[]): string {
  return JSON.stringify(tags)
}

export function calculateDiscountPercentage(originalPrice: number, currentPrice: number): number {
  if (!originalPrice || originalPrice <= currentPrice) return 0
  return Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
}

export function generateSKU(): string {
  return 'SKU' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 5).toUpperCase()
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}