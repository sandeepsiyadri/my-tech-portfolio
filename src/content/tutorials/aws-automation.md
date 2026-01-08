---
title: "Multi-Region AWS Infrastructure with Terraform"
pubDate: 2026-01-07
description: "How I architected a high-availability setup across us-east-1 and eu-west-1."
tags: ["AWS", "Terraform", "SRE"]
---

## The Challenge
Deploying a low-latency application for a global user base while ensuring 99.99% uptime.

## The Solution
We used Terraform Stack to manage cross-region state.

```hcl
module "vpc_east" {
  source = "./modules/vpc"
  region = "us-east-1"
}