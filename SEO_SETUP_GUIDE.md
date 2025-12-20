# Complete SEO & Open Graph Setup Guide for Next.js 13+ App Router

This guide provides a comprehensive setup for SEO, Open Graph images, and social media sharing in Next.js 13+ App Router projects.

## 📋 Table of Contents

1. [Current Implementation](#current-implementation)
2. [SEO Best Practices](#seo-best-practices)
3. [Open Graph Setup](#open-graph-setup)
4. [Social Media Optimization](#social-media-optimization)
5. [Testing & Validation](#testing--validation)
6. [Troubleshooting](#troubleshooting)
7. [Quick Checklist](#quick-checklist)

---

## 🎯 Current Implementation

### Complete Layout.tsx Code

```typescript
import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers/providers";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-space-grotesk',
})
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Janchetana EDU",
		template: "%s | Janchetana EDU"
	},
	description: "Education comes first - Janchetana School of Excellence",
	keywords: ["Janchetana", "School", "Education", "Nepal", "School of Excellence"],
	authors: [{ name: "Janchetana School" }],
	creator: "Janchetana School",
	publisher: "Janchetana School",
	metadataBase: new URL("https://www.janchetanaschool.edu.np"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.janchetanaschool.edu.np",
		siteName: "Janchetana EDU",
		title: "Janchetana EDU - Education comes first",
		description: "Education comes first - Janchetana School of Excellence",
		images: [
			{
				url: "/mainlogo.png",
				width: 1024,
				height: 1024,
				alt: "Janchetana EDU - School of Excellence",
			},
		],
	},
	twitter: {
		card: "summary",
		title: "Janchetana EDU - Education comes first",
		description: "Education comes first - Janchetana School of Excellence",
		images: ["/mainlogo.png"],
		creator: "@janchetana",
	},
	icons: {
		icon: [
			{ url: "/mainlogo.ico", sizes: "any" },
			{ url: "/mainlogo.png", type: "image/png", sizes: "512x512" },
		],
		apple: [
			{ url: "/mainlogo.png", sizes: "180x180", type: "image/png" },
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		// Add your verification codes here when you have them
		// google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
		// bing: "your-bing-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/mainlogo.ico" />
				<link rel="apple-touch-icon" href="/mainlogo.png" />
			</head>
			<body
				className={`${spaceGrotesk.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Toaster />
						{children}
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	);
}
```

---

## 🔍 SEO Best Practices

### 1. Title Tags

**Best Practices:**
- Keep titles between 50-60 characters
- Include primary keyword near the beginning
- Make it unique for each page
- Use template for consistent branding

**Example:**
```typescript
title: {
	default: "Your Site Name",
	template: "%s | Your Site Name"  // Adds " | Your Site Name" to all pages
}
```

### 2. Meta Descriptions

**Best Practices:**
- Keep between 150-160 characters
- Include call-to-action
- Include primary keyword naturally
- Make it compelling and unique

**Example:**
```typescript
description: "Your compelling description that includes keywords naturally and encourages clicks."
```

### 3. Keywords

**Best Practices:**
- Use 5-10 relevant keywords
- Focus on long-tail keywords
- Include location-based keywords if applicable
- Don't stuff keywords

**Example:**
```typescript
keywords: ["Primary Keyword", "Secondary Keyword", "Location", "Service Type"]
```

### 4. Canonical URLs

**Best Practices:**
- Always set canonical URLs to avoid duplicate content
- Use absolute URLs
- Set `metadataBase` for automatic URL resolution

**Example:**
```typescript
metadataBase: new URL("https://www.yoursite.com"),
alternates: {
	canonical: "/",
},
```

### 5. Robots Meta Tags

**Best Practices:**
- Control what search engines can index
- Use `noindex` for private/admin pages
- Use `nofollow` for untrusted links

**Example:**
```typescript
robots: {
	index: true,      // Allow indexing
	follow: true,     // Allow following links
	googleBot: {
		index: true,
		follow: true,
		"max-video-preview": -1,
		"max-image-preview": "large",
		"max-snippet": -1,
	},
},
```

### 6. Structured Data (JSON-LD)

**Add to your pages for better rich snippets:**

```typescript
// Add this to your page component
export default function Page() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "Janchetana EDU",
		"url": "https://www.janchetanaschool.edu.np",
		"logo": "https://www.janchetanaschool.edu.np/mainlogo.png",
		"description": "Education comes first - Janchetana School of Excellence"
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			{/* Your page content */}
		</>
	);
}
```

### 7. Page-Specific Metadata

**For individual pages, export metadata:**

```typescript
// app/about/page.tsx
export const metadata: Metadata = {
	title: "About Us",
	description: "Learn about our mission, vision, and values",
	openGraph: {
		title: "About Us | Janchetana EDU",
		description: "Learn about our mission, vision, and values",
		images: ["/about-us-image.png"],
	},
};
```

---

## 🖼️ Open Graph Setup

### What is Open Graph?

Open Graph (OG) tags control how your content appears when shared on social media platforms like Facebook, LinkedIn, Twitter, and WhatsApp.

### Required OG Tags

```typescript
openGraph: {
	type: "website",                    // website, article, book, etc.
	locale: "en_US",                    // Language and region
	url: "https://www.yoursite.com",    // Full URL
	siteName: "Your Site Name",         // Site name
	title: "Your Page Title",           // Share title
	description: "Your description",    // Share description
	images: [
		{
			url: "/og-image.png",        // Image URL (relative or absolute)
			width: 1200,                 // Image width in pixels
			height: 630,                 // Image height in pixels
			alt: "Image description",   // Alt text for accessibility
		},
	],
},
```

### OG Image Requirements

**Optimal Dimensions:**
- **Recommended:** 1200px × 630px (1.91:1 ratio)
- **Minimum:** 600px × 315px
- **Maximum:** 1200px × 1200px

**File Format:**
- PNG (preferred for logos/text)
- JPG (preferred for photos)
- File size: Under 8MB

**Design Tips:**
- Include your logo
- Add your site name
- Include a compelling tagline
- Use high contrast for readability
- Keep text minimal (social platforms may crop)

### Creating OG Images

**Option 1: Design Tools**
- Canva (template: "Facebook Post" 1200x630)
- Figma
- Photoshop/GIMP
- Online OG image generators

**Option 2: Next.js Image Generation API**

Create `app/opengraph-image.tsx`:

```typescript
import { ImageResponse } from 'next/og';

export const alt = 'Your Site Name';
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 128,
					background: 'white',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				Your Site Name
			</div>
		),
		{
			...size,
		}
	);
}
```

---

## 📱 Social Media Optimization

### Twitter Cards

```typescript
twitter: {
	card: "summary_large_image",  // or "summary" for square images
	title: "Your Title",
	description: "Your description",
	images: ["/twitter-image.png"],
	creator: "@yourhandle",      // Your Twitter handle
	site: "@yourhandle",         // Site Twitter handle
},
```

**Card Types:**
- `summary`: Square image (1200x1200px)
- `summary_large_image`: Rectangular image (1200x630px)

### LinkedIn

LinkedIn uses Open Graph tags, so your OG setup covers it. However, you can optimize:

- Use professional images
- Keep descriptions concise (150-200 characters)
- Include clear call-to-action

### WhatsApp

WhatsApp uses Facebook's Open Graph cache. After updating:
1. Clear cache using Facebook Debugger
2. Share link in new chat
3. Should update immediately after cache clear

---

## ✅ Testing & Validation

### 1. Facebook Sharing Debugger
**URL:** https://developers.facebook.com/tools/debug/

**Steps:**
1. Enter your website URL
2. Click "Debug"
3. Review the preview
4. Click "Scrape Again" to clear cache
5. Verify image and metadata

### 2. Twitter Card Validator
**URL:** https://cards-dev.twitter.com/validator

**Steps:**
1. Enter your website URL
2. Review the card preview
3. Check for any errors

### 3. LinkedIn Post Inspector
**URL:** https://www.linkedin.com/post-inspector/

**Steps:**
1. Enter your website URL
2. Review the preview
3. Clear cache if needed

### 4. Open Graph Checker
**URL:** https://www.opengraph.xyz/

**Steps:**
1. Enter your website URL
2. Review all OG tags
3. Check image dimensions

### 5. Google Rich Results Test
**URL:** https://search.google.com/test/rich-results

**Steps:**
1. Enter your website URL or paste HTML
2. Check for structured data
3. Review any warnings

### 6. SEO Checker Tools
- **Google Search Console:** https://search.google.com/search-console
- **Bing Webmaster Tools:** https://www.bing.com/webmasters
- **Screaming Frog SEO Spider:** https://www.screamingfrog.co.uk/seo-spider/

---

## 🐛 Troubleshooting

### Issue: Still showing old logo/image

**Solution:**
1. Clear Facebook cache using Facebook Debugger
2. Clear Twitter cache using Twitter Card Validator
3. Wait 24-48 hours for search engines
4. Verify image is accessible (not 404)
5. Check image dimensions match metadata

### Issue: Image not loading

**Check:**
1. Image path is correct (relative to public folder)
2. Image is in `/public` directory
3. Image is accessible at full URL
4. File permissions are correct
5. File size is under 8MB

### Issue: Metadata not updating

**Check:**
1. Changes are deployed to production
2. Using Next.js 13+ App Router (not Pages Router)
3. Using `metadata` export (not `<Head>` component)
4. Browser cache is cleared
5. CDN cache is cleared (Vercel redeploy)

### Issue: Wrong image dimensions

**Solution:**
1. Create proper OG image (1200x630px)
2. Update metadata with correct dimensions
3. Clear social media caches
4. Redeploy

---

## 📋 Quick Checklist

### Initial Setup
- [ ] Configure `metadata` export in `layout.tsx`
- [ ] Set `metadataBase` with your domain
- [ ] Add title and description
- [ ] Add keywords
- [ ] Configure Open Graph tags
- [ ] Configure Twitter Card tags
- [ ] Add favicon and icons
- [ ] Set robots meta tags

### Image Setup
- [ ] Create OG image (1200x630px)
- [ ] Place image in `/public` folder
- [ ] Update OG image URL in metadata
- [ ] Verify image dimensions in metadata
- [ ] Test image accessibility

### Testing
- [ ] Test with Facebook Debugger
- [ ] Test with Twitter Card Validator
- [ ] Test with LinkedIn Post Inspector
- [ ] Test with Open Graph Checker
- [ ] Verify in Google Search Console
- [ ] Test sharing on WhatsApp

### Advanced
- [ ] Add structured data (JSON-LD)
- [ ] Set up Google Search Console
- [ ] Set up Bing Webmaster Tools
- [ ] Add verification codes
- [ ] Create sitemap.xml
- [ ] Create robots.txt

---

## 🚀 Additional SEO Improvements

### 1. Sitemap Generation

Create `app/sitemap.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://www.yoursite.com',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://www.yoursite.com/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	];
}
```

### 2. Robots.txt

Create `app/robots.ts`:

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/admin/', '/api/'],
			},
		],
		sitemap: 'https://www.yoursite.com/sitemap.xml',
	};
}
```

### 3. Page-Specific SEO

For each page, export metadata:

```typescript
// app/products/[id]/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
	const product = await getProduct(params.id);
	
	return {
		title: product.name,
		description: product.description,
		openGraph: {
			title: product.name,
			description: product.description,
			images: [product.image],
		},
	};
}
```

### 4. Performance Optimization

- Use Next.js Image component
- Enable image optimization
- Use proper image formats (WebP, AVIF)
- Lazy load images
- Minimize JavaScript bundles

### 5. Mobile Optimization

- Ensure responsive design
- Test on mobile devices
- Use mobile-friendly viewport
- Optimize touch targets
- Test page speed on mobile

---

## 📚 Resources

- **Next.js Metadata Docs:** https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- **Open Graph Protocol:** https://ogp.me/
- **Twitter Cards:** https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
- **Google Search Central:** https://developers.google.com/search
- **Schema.org:** https://schema.org/

---

## 💡 Pro Tips

1. **Always use absolute URLs** for OG images when possible
2. **Test on multiple platforms** before going live
3. **Keep OG images updated** with your brand
4. **Monitor Search Console** for indexing issues
5. **Update metadata** when content changes
6. **Use descriptive alt text** for all images
7. **Keep titles under 60 characters** for best display
8. **Use unique descriptions** for each page
9. **Clear caches** after major changes
10. **Monitor social shares** to see what works

---

## 🔄 Updating for Other Projects

### Quick Copy-Paste Template

1. Copy the `metadata` object from above
2. Replace:
   - Site name
   - Description
   - URL/domain
   - Image paths
   - Keywords
3. Update `metadataBase` with your domain
4. Create OG image (1200x630px)
5. Place images in `/public` folder
6. Test with Facebook Debugger

### Customization Checklist

- [ ] Update site name
- [ ] Update description
- [ ] Update domain URL
- [ ] Update image paths
- [ ] Update keywords
- [ ] Create OG image
- [ ] Add favicon
- [ ] Update Twitter handle
- [ ] Add verification codes
- [ ] Test all platforms

---

**Last Updated:** 2025-01-09
**Version:** 1.0

