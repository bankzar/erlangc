# WFM Staffing Dashboard | Erlang C Calculator

A lightweight single-page workforce management dashboard for call center staffing analysis.

This tool uses **Erlang C** calculations to estimate:
- Peak hour call volume
- Traffic intensity (Erlangs)
- Minimum agents required to hit target service level
- FTE requirement with shrinkage
- Staffing sensitivity analysis across multiple agent counts
- Occupancy, ASA, immediate answer rate, and estimated abandon rate

## Features

- Clean dashboard-style UI
- Adjustable call center staffing inputs
- Instant recalculation on input changes
- Service level targeting
- Sensitivity table for staffing decisions
- No build step required — just open `index.html`

## Inputs

- Total Daily Calls
- % Traffic in Peak Hour
- Average Handle Time (AHT)
- Target Service Level
- Target Answer Time
- Shrinkage

## Tech Stack

- HTML
- Tailwind CSS (CDN)
- Vanilla JavaScript

## Run locally

Option 1: open `index.html` directly in your browser.

Option 2:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`

## Live demo

Netlify: https://erlangc.netlify.app/

## Suggested GitHub repo description

WFM Staffing Dashboard with Erlang C calculations for call center staffing and service level analysis.

## Suggested topics

`erlang-c` `call-center` `wfm` `workforce-management` `staffing` `dashboard` `javascript` `operations`
