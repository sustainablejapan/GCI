# WCDI v2.0 Methodology: The Global Commitment Index

## 1. Introduction

The Global Commitment Index (GCI) introduces the Weighted Commitment Delivery Index (WCDI), a novel metric designed to provide a more accurate and democratically representative measure of governmental accountability regarding electoral promises. Traditional promise-tracking methodologies often treat all pledges equally, regardless of their perceived importance to the electorate. The WCDI addresses this limitation by incorporating public opinion data to weight pledges, thereby reflecting a government's success in delivering on its most crucial mandates.

## 2. Core Principles

The WCDI is built upon two fundamental principles:
1.  **Granular Status Scoring (Sj):** A nuanced evaluation of a pledge's fulfillment status.
2.  **Voter Importance Weighting (Wi):** Assigning a value to each pledge based on its policy area's salience to the voting public.

## 3. Pledge Status Scoring (Sj)

Each tracked pledge is assigned a score from 0.00 to 1.00 based on its outcome:

| Status Category                   | Score (Sj) | Rationale                                                                        |
| :-------------------------------- | :--------- | :------------------------------------------------------------------------------- |
| **Kept / Achieved** | 1.00       | The promise has been fully delivered as stated in the manifesto.                 |
| **Strong Compromise / On Track** | 0.75       | The promise has been largely delivered, perhaps with minor alterations, or is on a clear and irreversible path to full completion. |
| **Weak Compromise / In Progress** | 0.50       | Significant steps have been taken, but the promise is only partially fulfilled, or its ultimate success remains uncertain. |
| **Stalled / Wait & See / Unclear**| 0.25       | No substantive action has been taken, or progress is halted, but the promise has not been explicitly abandoned. |
| **Broken / Not Kept / Abandoned** | 0.00       | The promise has been explicitly abandoned, reversed, or no discernible action has been taken towards it. |

## 4. Voter Importance Weighting (Wi)

Pledges are categorized by policy area, and each area is assigned a weight based on its average salience to the public, derived from aggregated national polling data (e.g., Ipsos, YouGov, Gallup). These weights are normalized to a consistent scale.

| Policy Area (Pledge Type)         | Normalized Weight (Wi) | Rationale (based on polling)                                              |
| :-------------------------------- | :--------------------- | :------------------------------------------------------------------------ |
| **Economy / Cost of Living** | 3.0                    | Consistently a top 1-2 concern for the electorate.                        |
| **Health and Social Care** | 3.0                    | Consistently a top 1-2 concern for the electorate (e.g., NHS in the UK). |
| **Immigration / Border Control** | 3.0                    | Often a top 3 concern, highly salient in many elections.                  |
| **Crime, Policing, Justice** | 2.0                    | Frequently in the top 5 public concerns.                                  |
| **Education / Schools** | 2.0                    | Frequently in the top 5 public concerns.                                  |
| **Housing / Infrastructure** | 1.0                    | Important, but generally lower overall salience than top categories.     |
| **Environment / Climate** | 1.0                    | Rising importance, but often lower than direct economic/social issues.    |
| **Defense / Foreign Policy** | 1.0                    | Important, but less direct impact on daily life for most voters.         |
| **Devolution / Governance** | 0.5                    | Often specific to a region or seen as a lower-tier priority.             |
| **Culture / Sports / Minor** | 0.5                    | Small-scale or niche policy promises.                                    |
| **Other / Technical** | 0.5                    | Bureaucratic changes or promises not clearly fitting major policy areas.  |

*Note: For a full academic paper, the exact polling sources and methodology for normalizing weights would be meticulously detailed.*

## 5. The WCDI Formula

The WCDI is calculated as the ratio of the total achieved weighted score to the total theoretical maximum weighted score, expressed as a percentage:

$$\text{WCDI} = \frac{\sum (\text{Sj} \times \text{Wi})}{\sum \text{Wi}} \times 100$$

Where:
* $\text{Sj}$ = Score for an individual pledge's status (from 0.00 to 1.00)
* $\text{Wi}$ = Importance weight for the pledge's policy area (from 0.5 to 3.0)

## 6. Crisis Adjustment (WCDI-Crisis-Adjusted)

To account for exogenous shocks (e.g., global pandemics, major economic crises, wars) that demonstrably impact a government's ability to deliver on specific pledges, a **WCDI-Crisis-Adjusted** score can be calculated. This parallel score excludes any pledges whose fulfillment status was directly and severely impacted by such an event. Each crisis-impacted pledge will be flagged with a `(C)` in the data.

This allows for two perspectives:
1.  **WCDI (Overall Performance):** The government's performance, including its ability to adapt to crises.
2.  **WCDI-Crisis-Adjusted (Core Mandate Performance):** Performance on pledges unaffected by major unforeseen events.

## 7. Future Directions and Academic Utility

The WCDI provides a robust framework for:
* **Comparative Political Science:** Enabling direct, weighted comparisons of governmental performance across different nations and political systems.
* **Accountability Journalism:** Offering a clearer, more nuanced metric for public scrutiny of political promises.
* **Public Policy Analysis:** Providing a data-driven tool for evaluating policy implementation.

***
