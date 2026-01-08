---
title: "Infrastructure as Code: Getting Started with Terraform"
pubDate: 2026-01-07
description: "A step-by-step guide to provisioning your first AWS VPC using Terraform modules."
author: "Sandeep Siyadri"
tags: ["Terraform", "AWS", "DevOps"]
---

# Introduction
In this tutorial, we will explore how to use Terraform to automate cloud resources.

## Prerequisites
- AWS CLI configured
- Terraform installed

## The Code
```hcl
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}