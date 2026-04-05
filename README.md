# Erlang C Workforce Calculator

A browser-based Erlang C calculator built for contact center and workforce planning use cases.

## Problem

Capacity planning in call centers is often still done manually in spreadsheets, with planners repeatedly adjusting assumptions such as call volume, average handling time, service level targets, and shrinkage.

This creates common problems:

- planning takes too long for quick decision-making
- scenario comparison is difficult
- operational teams rely on manual formulas that are easy to break
- simulation is inconvenient when business conditions change

This project was built to make Erlang C-based workforce planning faster, more accessible, and easier to use in a browser.

## Solution

Erlang C Workforce Calculator helps estimate staffing requirements based on common contact center planning inputs, such as:

- forecasted contact volume
- average handling time (AHT)
- target service level
- target answer time
- shrinkage
- working hours / staffing assumptions

Instead of relying on spreadsheet formulas, users can adjust assumptions in a browser-based interface and immediately see how those changes affect required staffing and service performance.

## What the Tool Does

This calculator is designed to support quick operational planning and “what-if” analysis for service environments.

Typical outputs include:

- estimated number of agents required
- service level implications
- occupancy-related planning insight
- quick comparison across different traffic assumptions

The main value of the tool is speed and usability: it allows planners to move from raw assumptions to staffing estimates without rebuilding formulas each time.

## Use Cases

- Contact center staffing estimation
- Service level planning
- Workforce what-if simulation
- Quick sensitivity analysis for volume / AHT changes
- Internal planning support before final WFM decisions

## Why Erlang C

Erlang C is a standard queueing approach commonly used in inbound contact center planning to estimate staffing needs under waiting-line conditions.

This project applies that logic in a lightweight web interface so that operational teams can test planning assumptions more quickly and with less spreadsheet overhead.

## Key Features

- browser-based workforce calculator
- fast scenario testing
- staffing estimation from operational inputs
- lightweight interface for planning use
- suitable for internal simulations and planning support

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS
- Front-end web application architecture

## Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/bankzar/erlangc.git
cd erlangc
2. Install dependencies
npm install
3. Start the development server
npm run dev
4. Open in browser

## Visit the local URL shown in the terminal.

Why This Project Matters

This project reflects a practical operations mindset: instead of treating workforce planning as a static spreadsheet exercise, it turns a standard planning model into a usable interactive tool.

It is especially relevant for environments where teams need to answer questions like:

How many agents are needed if volume increases?
What happens if AHT rises?
How does service level change under different staffing assumptions?
How sensitive is the plan to shrinkage or response targets?
Current Scope

This project is intended as a lightweight workforce planning utility, not a full enterprise WFM platform.

Its focus is:

accessibility
speed
planning convenience
operational simulation
Limitations

Current limitations may include:

not a full workforce management suite
not a complete forecasting platform
not a replacement for enterprise scheduling tools
intended for staffing estimation and planning support rather than end-to-end rostering
Possible Future Improvements

Potential next steps include:

multi-scenario comparison
saved planning sessions
downloadable planning reports
visualization of staffing sensitivity
support for additional queueing assumptions
integration with broader workforce planning workflows
