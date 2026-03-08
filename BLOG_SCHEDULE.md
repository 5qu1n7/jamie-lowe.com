# Blog Publishing Schedule 2026

## Overview
This document outlines the automated blog publishing schedule for Jamie-Lowe.com. All 12 blog posts are pre-written and stored in the `src/pages/blog/_drafts/` directory with date-prefixed filenames. A GitHub Actions workflow automatically publishes posts on their scheduled dates.

## GitHub Actions Workflow
- **Location**: `.github/workflows/publish-scheduled-posts.yml`
- **Schedule**: Daily at 8 AM UTC
- **Trigger**: Automatic (cron schedule) or manual (`workflow_dispatch`)
- **Function**: Checks for posts matching today's date and automatically moves them from `_drafts/` to the published `src/pages/blog/` directory

## Publishing Schedule

### 2027 Blog Posts

| Date | Post Title | Filename | Status |
|------|-----------|----------|--------|
| Mar 7 | 2027 Military Family PCS Relocation Guide | `2027-03-07-pcs-relocation.astro` | ✅ Written |
| Mar 21 | VA Loan Rate Trends 2027 | `2027-03-21-va-loan-rates.astro` | ✅ Written |
| Apr 4 | Military BAH vs Buying: Financial Breakdown | `2027-04-04-bah-buying.astro` | ✅ Written |
| Apr 18 | Spring Branch Real Estate: Military Family Guide | `2027-04-18-spring-branch.astro` | ✅ Written |
| May 2 | New Construction vs Existing Homes for Military | `2027-05-02-new-vs-existing.astro` | ✅ Written |
| May 16 | Best Schools in North San Antonio for Military | `2027-05-16-schools-north.astro` | ✅ Written |
| May 30 | First-Time Home Buyer Guide: San Antonio 2027 | `2027-05-30-first-time-buyer.astro` | ✅ Written |
| Jun 13 | Bulverde vs Schertz: Military Community Comparison | `2027-06-13-bulverde-schertz.astro` | ✅ Written |
| Jun 27 | Home Inspection Checklist for Military Buyers | `2027-06-27-home-inspection.astro` | ✅ Written |
| Jul 11 | Summer Home Buying Season: Timing Your Purchase | `2027-07-11-summer-buying.astro` | ✅ Written |
| Jul 25 | Negotiating Offers Like a Pro: Real Estate Tips | `2027-07-25-negotiating.astro` | ✅ Written |
| Aug 8 | New Construction Builders in San Antonio 2027 | `2027-08-08-builders.astro` | ✅ Written |

## How It Works

1. **Pre-Publication**: Posts are written and stored in `src/pages/blog/_drafts/` with date-prefixed filenames (e.g., `2026-01-08-pcs-relocation.astro`)

2. **Scheduled Check**: GitHub Actions runs daily at 8 AM UTC and checks for any posts with filenames matching today's date

3. **Automatic Publishing**: When a matching post is found:
   - File is moved from `_drafts/` to `src/pages/blog/`
   - Date prefix is removed from filename (e.g., `2026-01-08-pcs-relocation.astro` becomes `pcs-relocation.astro`)
   - Changes are automatically committed and pushed to the `main` branch with message: "Publish scheduled blog posts for YYYY-MM-DD"

4. **Auto-Deployment**: Cloudflare Pages automatically detects the push and deploys the updated site with the new published post

## Blog Index Update

The blog index (`src/pages/blog/index.astro`) has been updated to dynamically:
- Scan the blog directory for all published posts
- Extract frontmatter (title, description, date) from each post
- Sort posts by publication date (newest first)
- Render BlogCard components for each post

This eliminates manual index updates—new posts automatically appear on the blog homepage when published.

## Manual Triggering

You can manually trigger the publishing workflow at any time through GitHub Actions:
1. Navigate to the repository's Actions tab
2. Select "Publish Scheduled Blog Posts"
3. Click "Run workflow"
4. Select the branch and click "Run"

This is useful for testing or publishing posts on non-standard dates.

## Timezone Note

The workflow runs at 8 AM UTC daily. Posts with dates matching the current UTC date will be published. Account for timezone differences when scheduling posts:
- 8 AM UTC = 3 AM EST (Eastern Standard Time)
- 8 AM UTC = 2 AM CST (Central Standard Time)
- 8 AM UTC = 12 AM PST (Pacific Standard Time)

If you need posts to publish at a different time, modify the cron expression in `.github/workflows/publish-scheduled-posts.yml`:
```yaml
cron: '0 8 * * *'  # Current: 8 AM UTC
cron: '0 14 * * *' # Example: 2 PM UTC (9 AM EST)
```

## Monitoring and Troubleshooting

### Check Workflow Status
1. Go to GitHub repository → Actions tab
2. Look for "Publish Scheduled Blog Posts" workflow
3. Click recent runs to view execution details

### Common Issues
- **Posts not publishing**: Verify filename format matches `YYYY-MM-DD-slug.astro`
- **Filename mismatch**: Check that date in filename exactly matches system date (UTC)
- **Git configuration**: Ensure GitHub Actions has write permissions (usually enabled by default)

### Checking Logs
GitHub Actions provides detailed logs for each workflow run. Check logs to verify:
- Posts were detected and moved
- Git commits were successful
- No errors occurred during execution

## Post Content Requirements

All blog posts follow this template structure:
```astro
---
layout: '../../../layouts/BaseLayout.astro'
title: 'Post Title (55-60 chars with primary keyword)'
description: 'Meta description (155-160 chars with call-to-action)'
author: 'Jamie Lowe'
pubDate: 'YYYY-MM-DD'
heroImage: '/hero-img1.jpg'
---

<h1>Post Title</h1>
<!-- Post content with H2/H3 sections, internal links, schema markup -->
```

### SEO Requirements
- Title: 55-60 characters with primary keyword
- Meta description: 155-160 characters with call-to-action
- 1800-2300 words per post
- 3-5 internal links to `/blog` and homepage
- 1-2 external authoritative sources
- Primary keyword in first 100 words
- BlogPosting schema markup included in BaseLayout

## Future Additions

Consider these enhancements:
- Email notification when posts are published
- Slack notification to content team
- Automatic social media posting on publication
- RSS feed generation (if not already implemented)
- Post statistics dashboard tracking views and engagement
