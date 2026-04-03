# How to Create a Wikidata Entry for WANG

This is a step-by-step guide for creating WANG's Wikidata item and your personal item. Wikidata is the structured data backbone behind Wikipedia, Google Knowledge Panels, and many AI systems. Getting WANG listed here is the single most important step toward appearing in Google's Knowledge Panel.

**Time required:** About 30-45 minutes for both items.

---

## Part 1: Create Your Wikidata Account

1. Go to **https://www.wikidata.org**
2. Click **Log in / Create account** (top right)
3. Create an account with your preferred username and email
4. Verify your email address
5. Once logged in, you are ready to create items

---

## Part 2: Create the WANG Organization Item

### Step 2A: Start a New Item

1. Go to **https://www.wikidata.org/wiki/Special:NewItem**
2. Fill in the form exactly as follows:

| Field | Value |
|-------|-------|
| **Language** | en (English) |
| **Label** | Welfare Association for New Generation |
| **Description** | Pakistani nonprofit organization promoting digital access, AI education, and rural innovation from Balochistan |
| **Aliases** | WANG, We Are New Generation |

3. Click **Create**
4. You will be taken to the new item page. **Write down the Q-number** shown at the top (e.g., Q120000000). You will need it later.

### Step 2B: Add Statements

After the item is created, you will see an empty "Statements" section. Click **+ add statement** for each of the following. For each one, type the property name in the property field, then select it from the dropdown.

#### Required Statements

| # | Property | Property Code | Value | Value Code |
|---|----------|---------------|-------|------------|
| 1 | instance of | P31 | nonprofit organization | Q163740 |
| 2 | country | P17 | Pakistan | Q843 |
| 3 | inception | P571 | 2012 | (just type 2012) |
| 4 | headquarters location | P159 | Lasbela District | Q1061955 |
| 5 | official website | P856 | https://wang.org.pk | (paste the URL) |
| 6 | field of work | P101 | digital literacy | Q1665984 |
| 7 | field of work | P101 | artificial intelligence | Q11660 |
| 8 | field of work | P101 | rural development | Q907310 |
| 9 | award received | P166 | *(see note below)* | |
| 10 | founder | P112 | *(add after creating your person item in Part 3)* | |

**How to add each statement:**

1. Click **+ add statement**
2. In the "Property" field, start typing the property name (e.g., "instance of") -- a dropdown will appear, select it
3. In the "Value" field, start typing the value (e.g., "nonprofit organization") -- select the matching Wikidata item from the dropdown
4. Click **Save** (the checkmark icon)

**Note on "award received" (P166):** The CAREC Gender Climate Awards 2024 may not have a Wikidata item yet. You have two options:
- Search Wikidata for "CAREC Gender Climate Awards" -- if it exists, use it
- If it does not exist, skip this statement for now, or create a new item for the award first (same process as creating any item: label = "CAREC Gender Climate Awards", description = "annual award by CAREC for gender and climate initiatives", instance of = award / Q618779)

### Step 2C: Add References to Each Statement

References are what make your claims credible and less likely to be removed. For each statement you added:

1. Click the statement to expand it
2. Click **+ add reference**
3. Set property to **reference URL** (P854)
4. Paste the supporting URL
5. Optionally add **retrieved** (P813) with today's date

**Suggested reference URLs:**

| Statement | Reference URL |
|-----------|---------------|
| Official website, country, inception | https://wang.org.pk/about |
| Headquarters location | https://wang.org.pk/contact |
| Award received | Link to the CAREC awards announcement page |
| Field of work | https://wang.org.pk/programs |

---

## Part 3: Create the Qaisar Roonjha Person Item

### Step 3A: Create the Item

1. Go to **https://www.wikidata.org/wiki/Special:NewItem**
2. Fill in:

| Field | Value |
|-------|-------|
| **Language** | en (English) |
| **Label** | Qaisar Roonjha |
| **Description** | Pakistani social entrepreneur and founder of WANG |
| **Aliases** | Qaisar Ahmad Roonjha |

3. Click **Create**
4. Note the Q-number for this item too.

### Step 3B: Add Statements

| # | Property | Property Code | Value |
|---|----------|---------------|-------|
| 1 | instance of | P31 | human (Q5) |
| 2 | occupation | P106 | social entrepreneur (Q848197) |
| 3 | employer | P108 | Welfare Association for New Generation (use the Q-number from Part 2) |
| 4 | educated at | P69 | Brandeis University (Q49114) |
| 5 | country of citizenship | P27 | Pakistan (Q843) |

Add references where possible, using your LinkedIn profile, WANG website team page, and Brandeis alumni records.

### Step 3C: Link Back to WANG

Now go back to the WANG item you created in Part 2:

1. Find the WANG item (search for it, or use the Q-number URL: `https://www.wikidata.org/wiki/QXXXXXXX`)
2. Click **+ add statement**
3. Property: **founder** (P112)
4. Value: Search for "Qaisar Roonjha" and select your newly created person item
5. Save and add a reference (wang.org.pk/about or team page)

---

## Part 4: After Creation Checklist

- [ ] WANG item created with Q-number: ___________
- [ ] Qaisar Roonjha item created with Q-number: ___________
- [ ] All statements added to WANG item
- [ ] All statements added to Qaisar item
- [ ] Founder (P112) on WANG item links to Qaisar item
- [ ] References added to all major statements
- [ ] Both items have descriptions in English

---

## Why This Matters: The Path to a Google Knowledge Panel

Google Knowledge Panels pull structured data from multiple sources, with **Wikidata being the primary one**. Here is how the pipeline works:

1. **Wikidata item exists** (you are doing this now)
2. **Google's Knowledge Graph ingests Wikidata** (happens automatically over weeks)
3. **Google verifies claims** against other web sources (your website, social profiles, news articles)
4. **Knowledge Panel appears** in Google Search results for "WANG Pakistan" or "Welfare Association for New Generation"

After creating these Wikidata items, the other things that help trigger a Knowledge Panel are:
- Consistent NAP (Name, Address, Phone) across the web
- A Wikipedia article (harder to create, but Wikidata is the prerequisite)
- Structured data (Schema.org JSON-LD) on wang.org.pk (already in progress)
- Press coverage and third-party mentions

---

## Tips and Common Pitfalls

- **Do not add unsourced claims.** Wikidata editors may remove statements without references.
- **Be factual, not promotional.** Descriptions should be neutral and encyclopedic.
- **Start with the basics.** You can always add more statements later.
- **Check for duplicates first.** Before creating items, search Wikidata to make sure WANG and Qaisar Roonjha do not already exist.
- **Edits are public.** Your edit history is visible, so keep everything accurate and verifiable.
- **Be patient with Google.** It can take 2-8 weeks for Wikidata changes to appear in Google's Knowledge Graph.

---

## Quick Reference: Property Codes

| Property | Code |
|----------|------|
| instance of | P31 |
| country | P17 |
| inception | P571 |
| headquarters location | P159 |
| official website | P856 |
| founder | P112 |
| award received | P166 |
| field of work | P101 |
| occupation | P106 |
| employer | P108 |
| educated at | P69 |
| country of citizenship | P27 |
| reference URL | P854 |
| retrieved | P813 |
