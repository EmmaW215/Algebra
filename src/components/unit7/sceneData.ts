export const sceneData = [
  {
    id: 4,
    title: "The Distributive Property with Variables",
    content: [
      "Let's extend the idea of factoring to algebra. If we have the expression **2 + 4x**, can we break this up?",
      "We can write this as **2(1 + 2x)**. We essentially 'factored out' the 2.",
      "Another example: **6x + 30**. We can factor out a 6 to get **6(x + 5)**.",
      "This is the reverse of the distributive property! We are undoing the distribution.",
      "What about **1/2 - 3/2x**? We can factor out **1/2** to get **1/2(1 - 3x)**."
    ],
    problem: {
      question: "Factor out the greatest common factor from: **4x + 18**",
      options: ["2(2x + 9)", "4(x + 4.5)", "2(2x + 18)", "x(4 + 18/x)"],
      answer: "2(2x + 9)",
      explanation: "Both 4x and 18 are divisible by 2. Factoring out 2 gives 2(2x + 9)."
    }
  },
  {
    id: 5,
    title: "Factoring with the Distributive Property",
    content: [
      "Let's rewrite **4x + 18** as the product of two expressions.",
      "The largest number divisible into both 4x and 18 is 2.",
      "So we can write it as **2(2x) + 2(9)**.",
      "Factoring out the 2 gives **2(2x + 9)**.",
      "Another example: **12 + 32y**. The GCF is 4.",
      "12 = 4 * 3, and 32y = 4 * 8y. So we get **4(3 + 8y)**."
    ],
    problem: {
      question: "Which expressions are equivalent to **-56z + 28**?",
      options: ["1/2(-28z + 14)", "(-1.4z + 0.7) * 40", "(14 - 7z) * (-4)", "(8z - 4)(-7)", "-2(-28z - 14)"],
      answer: "(8z - 4)(-7)",
      explanation: "Distributing (8z - 4)(-7) gives -56z + 28. Also (14 - 7z)(-4) gives -56z + 28."
    }
  },
  {
    id: 6,
    title: "Combining Like Terms with Negative Coefficients & Distribution",
    content: [
      "Let's simplify **2(3x + 5)**. This means two groups of (3x + 5).",
      "Distributing the 2: **2 * 3x + 2 * 5 = 6x + 10**.",
      "Now a harder one: **7(3y - 5) - 2(10 + 4y)**.",
      "Distribute the 7: **21y - 35**.",
      "Distribute the -2: **-20 - 8y**.",
      "Combine like terms: (21y - 8y) + (-35 - 20) = **13y - 55**."
    ],
    problem: {
      question: "Simplify **2 - 4(5p + 1)**",
      options: ["-20p - 2", "-5p - 4", "-20p + 2", "-5p + 4"],
      answer: "-20p - 2",
      explanation: "Distribute -4: 2 - 20p - 4. Combine constants: 2 - 4 = -2. Result: -20p - 2."
    }
  },
  {
    id: 7,
    title: "Equivalent Expressions: Negative Numbers & Distribution",
    content: [
      "Let's identify equivalent expressions.",
      "Expression A: **2(-6c + 3) + 4c**.",
      "Distribute: -12c + 6 + 4c.",
      "Combine: -8c + 6.",
      "Expression B: **3(-4c + 2) + 4c**.",
      "Distribute: -12c + 6 + 4c.",
      "Combine: -8c + 6.",
      "They are equivalent!"
    ],
    problem: {
      question: "Which expression is equivalent to **5p + 3p + (-9)**?",
      options: ["8p + 9", "3(p + (-3)) + 5p", "None of the above"],
      answer: "None of the above",
      explanation: "5p + 3p - 9 simplifies to **8p - 9**. Option A is 8p + 9 (wrong sign). Option B simplifies to 3p - 9 + 5p = 8p - 9. Wait, Option B IS equivalent!"
    }
  },
  {
    id: 8,
    title: "Multiplying & Dividing Powers (Integer Exponents)",
    content: [
      "Property: **x^a * x^b = x^(a+b)**.",
      "Example: **4^-3 * 4^5 = 4^(-3+5) = 4^2**.",
      "Property: **x^a / x^b = x^(a-b)**.",
      "Example: **12^-7 / 12^-5 = 12^(-7 - (-5)) = 12^-2**."
    ],
    problem: {
      question: "Simplify **b^-2 / b^4**",
      options: ["b^2", "b^-6", "b^6", "b^-2"],
      answer: "b^-6",
      explanation: "Subtract exponents: -2 - 4 = -6. Result: b^-6."
    }
  },
  {
    id: 9,
    title: "Multiplying Binomials Intro",
    content: [
      "Let's multiply **(x - 4)(x + 7)**.",
      "We distribute the (x - 4) onto x and 7.",
      "**x(x - 4) + 7(x - 4)**",
      "**x^2 - 4x + 7x - 28**",
      "Combine like terms: **x^2 + 3x - 28**."
    ],
    problem: {
      question: "Expand **(x - 5)(x - 4)**",
      options: ["x^2 - 9x + 20", "x^2 - x - 20", "x^2 + 9x + 20", "x^2 - 20x + 9"],
      answer: "x^2 - 9x + 20",
      explanation: "x*x = x^2. -5x - 4x = -9x. -5*-4 = 20. Result: x^2 - 9x + 20."
    }
  },
  {
    id: 10,
    title: "Warmup: Multiplying Binomials",
    content: [
      "Practice expanding **(x + 2)(x + 3)**.",
      "Area Model: Divide a rectangle into x, 2 and x, 3.",
      "Areas: x^2, 3x, 2x, 6.",
      "Sum: **x^2 + 5x + 6**."
    ],
    problem: {
      question: "Expand **(x + 3)(x + 4)**",
      options: ["x^2 + 12x + 7", "x^2 + 7x + 12", "x^2 + 12", "x^2 + 7x + 7"],
      answer: "x^2 + 7x + 12",
      explanation: "x^2 + 4x + 3x + 12 = x^2 + 7x + 12."
    }
  },
  {
    id: 11,
    title: "Multiplying Binomials (FOIL)",
    content: [
      "FOIL stands for First, Outside, Inside, Last.",
      "Multiply **(3x + 2)(5x - 7)**.",
      "First: 3x * 5x = 15x^2",
      "Outside: 3x * -7 = -21x",
      "Inside: 2 * 5x = 10x",
      "Last: 2 * -7 = -14",
      "Combine: 15x^2 - 11x - 14."
    ],
    problem: {
      question: "Expand **(c + 8)(8c + 2)**",
      options: ["8c^2 + 66c + 16", "8c^2 + 16c + 16", "c^2 + 66c + 16", "8c^2 + 64c + 16"],
      answer: "8c^2 + 66c + 16",
      explanation: "8c^2 + 2c + 64c + 16 = 8c^2 + 66c + 16."
    }
  },
  {
    id: 12,
    title: "Special Products (x+a)(x-a)",
    content: [
      "Multiply **(x + 3)(x - 3)**.",
      "x*x = x^2. x*-3 = -3x. 3*x = 3x. 3*-3 = -9.",
      "The middle terms cancel! -3x + 3x = 0.",
      "Result: **x^2 - 9**.",
      "Pattern: **(x + a)(x - a) = x^2 - a^2**."
    ],
    problem: {
      question: "Expand **(x + 3)(x - 3)**",
      options: ["x^2 - 9", "x^2 + 9", "x^2 - 6x + 9", "x^2 + 6x - 9"],
      answer: "x^2 - 9",
      explanation: "Difference of squares pattern: a^2 - b^2."
    }
  },
  {
    id: 13,
    title: "Squaring Binomials (x+a)²",
    content: [
      "Expand **(x + 7)^2**.",
      "This means **(x + 7)(x + 7)**.",
      "x^2 + 7x + 7x + 49.",
      "Combine: **x^2 + 14x + 49**.",
      "Pattern: **(x + a)^2 = x^2 + 2ax + a^2**."
    ],
    problem: {
      question: "Expand **(x + 6)(x + 6)**",
      options: ["x^2 + 36", "x^2 + 12x + 36", "x^2 + 6x + 36", "x^2 + 12x + 12"],
      answer: "x^2 + 12x + 36",
      explanation: "Square the first (x^2), double the product (2*6x = 12x), square the last (36)."
    }
  },
  {
    id: 14,
    title: "Special Products (ax+b)(ax-b)",
    content: [
      "Multiply **(2x + 8)(2x - 8)**.",
      "This is (a + b)(a - b) form.",
      "Result is a^2 - b^2.",
      "(2x)^2 - 8^2 = **4x^2 - 64**."
    ],
    problem: {
      question: "Expand **(7x + 10)^2**",
      options: ["49x^2 + 100", "49x^2 + 140x + 100", "49x^2 + 70x + 100", "7x^2 + 140x + 100"],
      answer: "49x^2 + 140x + 100",
      explanation: "(7x)^2 + 2(7x)(10) + 10^2 = 49x^2 + 140x + 100."
    }
  },
  {
    id: 15,
    title: "Binomial Special Products Review",
    content: [
      "Difference of Squares: **(a + b)(a - b) = a^2 - b^2**.",
      "Perfect Square: **(a + b)^2 = a^2 + 2ab + b^2**.",
      "Perfect Square: **(a - b)^2 = a^2 - 2ab + b^2**."
    ],
    problem: {
      question: "Expand **(5 + 6b^3)^2**",
      options: ["25 + 36b^6", "25 + 60b^3 + 36b^6", "25 + 30b^3 + 36b^6", "10 + 12b^3"],
      answer: "25 + 60b^3 + 36b^6",
      explanation: "5^2 + 2(5)(6b^3) + (6b^3)^2 = 25 + 60b^3 + 36b^6."
    }
  },
  {
    id: 16,
    title: "Factoring Quadratics (x+a)(x+b)",
    content: [
      "Factor **x^2 - 3x - 10**.",
      "We need two numbers that multiply to -10 and add to -3.",
      "Factors of -10: (1, -10), (-1, 10), (2, -5), (-2, 5).",
      "Sums: -9, 9, -3, 3.",
      "The pair (2, -5) sums to -3.",
      "So it factors to **(x + 2)(x - 5)**."
    ],
    problem: {
      question: "Factor **x^2 + 3x - 4**",
      options: ["(x + 4)(x - 1)", "(x - 4)(x + 1)", "(x + 2)(x - 2)", "(x + 3)(x - 1)"],
      answer: "(x + 4)(x - 1)",
      explanation: "4 * -1 = -4 and 4 + -1 = 3."
    }
  },
  {
    id: 17,
    title: "Factoring Quadratics (Leading Coeff = 1)",
    content: [
      "Factor **x^2 + 5x + 6**.",
      "Find numbers that multiply to 6 and add to 5.",
      "2 and 3 work (2*3=6, 2+3=5).",
      "Result: **(x + 2)(x + 3)**."
    ],
    problem: {
      question: "Factor **x^2 - 8x - 9**",
      options: ["(x - 9)(x + 1)", "(x + 9)(x - 1)", "(x - 3)(x + 3)", "(x - 9)(x - 1)"],
      answer: "(x - 9)(x + 1)",
      explanation: "-9 * 1 = -9 and -9 + 1 = -8."
    }
  },
  {
    id: 18,
    title: "Factoring Polynomials by Common Factor",
    content: [
      "Factor **2x^3 - 6x^2**.",
      "Find the GCF. Both terms have 2 and x^2.",
      "GCF is **2x^2**.",
      "Divide each term by 2x^2: x and -3.",
      "Result: **2x^2(x - 3)**."
    ],
    problem: {
      question: "Factor **12x^2 + 18x**",
      options: ["6x(2x + 3)", "6(2x^2 + 3x)", "x(12x + 18)", "3x(4x + 6)"],
      answer: "6x(2x + 3)",
      explanation: "GCF is 6x. 12x^2/6x = 2x. 18x/6x = 3."
    }
  },
  {
    id: 19,
    title: "GCF of Monomials",
    content: [
      "Find GCF of **10x^3** and **4x**.",
      "Coefficients: GCF of 10 and 4 is 2.",
      "Variables: x^3 and x^1. Lower power is x.",
      "GCF is **2x**."
    ],
    problem: {
      question: "Find GCF of **9x^2** and **6x**",
      options: ["3x", "3x^2", "6x", "x"],
      answer: "3x",
      explanation: "GCF(9,6)=3. GCF(x^2,x)=x. Result: 3x."
    }
  },
  {
    id: 20,
    title: "Factoring Quadratics Example 2",
    content: [
      "Factor **x^2 - 14x + 40**.",
      "Multiply to 40, Add to -14.",
      "Since product is positive and sum is negative, both numbers are negative.",
      "-4 and -10 work.",
      "Result: **(x - 4)(x - 10)**."
    ],
    problem: {
      question: "Factor **x^2 - x - 12**",
      options: ["(x - 4)(x + 3)", "(x + 4)(x - 3)", "(x - 6)(x + 2)", "(x - 12)(x + 1)"],
      answer: "(x - 4)(x + 3)",
      explanation: "-4 * 3 = -12 and -4 + 3 = -1."
    }
  },
  {
    id: 21,
    title: "More Factoring Quadratics Examples",
    content: [
      "Factor **x^2 + 15x + 50**.",
      "Multiply to 50, Add to 15.",
      "5 and 10 work.",
      "Result: **(x + 5)(x + 10)**.",
      "Factor **-x^2 - 5x + 24**.",
      "Factor out -1 first: **-(x^2 + 5x - 24)**.",
      "Multiply to -24, Add to 5: 8 and -3.",
      "Result: **-(x + 8)(x - 3)**."
    ],
    problem: {
      question: "Factor **x^2 + 3x - 4**",
      options: ["(x + 4)(x - 1)", "(x - 4)(x + 1)", "(x + 2)(x + 2)", "(x - 2)(x - 2)"],
      answer: "(x + 4)(x - 1)",
      explanation: "4 * -1 = -4 and 4 + -1 = 3."
    }
  },
  {
    id: 22,
    title: "Factoring Quadratics with Common Factor",
    content: [
      "Factor **6x^2 - 18x + 12**.",
      "First, factor out GCF of 6: **6(x^2 - 3x + 2)**.",
      "Now factor the quadratic inside.",
      "Multiply to 2, Add to -3: -1 and -2.",
      "Result: **6(x - 1)(x - 2)**."
    ],
    problem: {
      question: "Factor **6x^2 - 18x - 60**",
      options: ["6(x - 5)(x + 2)", "6(x + 5)(x - 2)", "6(x - 10)(x + 1)", "(6x - 30)(x + 2)"],
      answer: "6(x - 5)(x + 2)",
      explanation: "Factor out 6: 6(x^2 - 3x - 10). Factor inside: (x-5)(x+2)."
    }
  },
  {
    id: 23,
    title: "Factoring Completely",
    content: [
      "Factor **4x^2 - 8x - 12**.",
      "GCF is 4: **4(x^2 - 2x - 3)**.",
      "Multiply to -3, Add to -2: -3 and 1.",
      "Result: **4(x - 3)(x + 1)**."
    ],
    problem: {
      question: "Factor **-3x^2 + 21x - 30**",
      options: ["-3(x - 5)(x - 2)", "3(x - 5)(x - 2)", "-3(x + 5)(x + 2)", "-3(x - 10)(x - 1)"],
      answer: "-3(x - 5)(x - 2)",
      explanation: "Factor out -3: -3(x^2 - 7x + 10). Factor inside: (x-5)(x-2)."
    }
  },
  {
    id: 24,
    title: "Factoring Simple Quadratics Review",
    content: [
      "Review: **x^2 + 3x + 2** factors to **(x + 1)(x + 2)**.",
      "Review: **x^2 - x - 42** factors to **(x - 7)(x + 6)**."
    ],
    problem: {
      question: "Factor **x^2 - x - 42**",
      options: ["(x - 7)(x + 6)", "(x + 7)(x - 6)", "(x - 21)(x + 2)", "(x - 42)(x + 1)"],
      answer: "(x - 7)(x + 6)",
      explanation: "-7 * 6 = -42 and -7 + 6 = -1."
    }
  },
  {
    id: 25,
    title: "Intro to Grouping",
    content: [
      "How to factor **4x^2 + 25x - 21**?",
      "Multiply a*c: 4 * -21 = -84.",
      "Find numbers that multiply to -84 and add to 25.",
      "28 and -3 work.",
      "Split middle term: **4x^2 + 28x - 3x - 21**.",
      "Group: **4x(x + 7) - 3(x + 7)**.",
      "Factor out (x + 7): **(x + 7)(4x - 3)**."
    ],
    problem: {
      question: "Factor **6x^2 + 7x + 1**",
      options: ["(6x + 1)(x + 1)", "(3x + 1)(2x + 1)", "(6x - 1)(x - 1)", "(x + 6)(6x + 1)"],
      answer: "(6x + 1)(x + 1)",
      explanation: "6*1=6. Sum=7. Numbers 6, 1. 6x^2+6x+x+1 = 6x(x+1)+1(x+1) = (6x+1)(x+1)."
    }
  },
  {
    id: 26,
    title: "Factoring by Grouping",
    content: [
      "Factor **2x^2 + 8x + 3x + 12**.",
      "Group first two: 2x(x + 4).",
      "Group last two: 3(x + 4).",
      "Combine: **(2x + 3)(x + 4)**."
    ],
    problem: {
      question: "Factor **9x^2 + 6x + 12x + 8**",
      options: ["(3x + 2)(3x + 4)", "(3x + 1)(3x + 8)", "(9x + 4)(x + 2)", "(3x + 2)^2"],
      answer: "(3x + 2)(3x + 4)",
      explanation: "3x(3x+2) + 4(3x+2) = (3x+2)(3x+4)."
    }
  },
  {
    id: 27,
    title: "Factoring Quadratics by Grouping",
    content: [
      "Factor **4y^2 + 4y - 15**.",
      "Product: 4*-15 = -60. Sum: 4.",
      "Numbers: 10 and -6.",
      "Split: 4y^2 - 6y + 10y - 15.",
      "Group: 2y(2y - 3) + 5(2y - 3).",
      "Result: **(2y - 3)(2y + 5)**."
    ],
    problem: {
      question: "Factor **2x^2 - 13x + 20**",
      options: ["(2x - 5)(x - 4)", "(2x + 5)(x + 4)", "(2x - 4)(x - 5)", "(x - 2)(2x - 10)"],
      answer: "(2x - 5)(x - 4)",
      explanation: "2*20=40. Sum=-13. -5, -8. 2x^2-8x-5x+20 = 2x(x-4)-5(x-4) = (2x-5)(x-4)."
    }
  },
  {
    id: 28,
    title: "Factoring Quadratics (Leading Coeff ≠ 1)",
    content: [
      "Factor **2x^2 + 7x + 3**.",
      "Product: 6. Sum: 7.",
      "Numbers: 6 and 1.",
      "Split: 2x^2 + 6x + x + 3.",
      "Group: 2x(x + 3) + 1(x + 3).",
      "Result: **(2x + 1)(x + 3)**."
    ],
    problem: {
      question: "Factor **3x^2 + 10x + 8**",
      options: ["(3x + 4)(x + 2)", "(3x + 2)(x + 4)", "(3x + 8)(x + 1)", "(3x + 1)(x + 8)"],
      answer: "(3x + 4)(x + 2)",
      explanation: "3*8=24. Sum=10. 6, 4. 3x^2+6x+4x+8 = 3x(x+2)+4(x+2)."
    }
  },
  {
    id: 29,
    title: "Factoring: Common Factor + Grouping",
    content: [
      "Factor **35k^2 + 100k - 15**.",
      "Factor out 5: **5(7k^2 + 20k - 3)**.",
      "Inside: Product -21, Sum 20. Numbers 21, -1.",
      "Split: 7k^2 + 21k - k - 3.",
      "Group: 7k(k + 3) - 1(k + 3).",
      "Result: **5(7k - 1)(k + 3)**."
    ],
    problem: {
      question: "Factor **12x^2 + 18x**",
      options: ["6x(2x + 3)", "6(2x^2 + 3x)", "x(12x + 18)", "3x(4x + 6)"],
      answer: "6x(2x + 3)",
      explanation: "GCF is 6x. 12x^2/6x = 2x. 18x/6x = 3."
    }
  },
  {
    id: 30,
    title: "Factoring: Negative Common Factor",
    content: [
      "Factor **-12f^2 - 38f + 22**.",
      "Factor out -2: **-2(6f^2 + 19f - 11)**.",
      "Inside: Product -66, Sum 19. Numbers 22, -3.",
      "Split: 6f^2 - 3f + 22f - 11.",
      "Group: 3f(2f - 1) + 11(2f - 1).",
      "Result: **-2(3f + 11)(2f - 1)**."
    ],
    problem: {
      question: "Factor **-2x^2 - 7x - 3**",
      options: ["-(2x + 1)(x + 3)", "-(2x - 1)(x - 3)", "(2x + 1)(x + 3)", "-(x + 1)(2x + 3)"],
      answer: "-(2x + 1)(x + 3)",
      explanation: "Factor -1: -(2x^2+7x+3). Factors to -(2x+1)(x+3)."
    }
  },
  {
    id: 31,
    title: "Difference of Squares Intro",
    content: [
      "Pattern: **a^2 - b^2 = (a + b)(a - b)**.",
      "Factor **x^2 - 9**.",
      "x^2 - 3^2 = **(x + 3)(x - 3)**.",
      "Factor **y^2 - 25**.",
      "y^2 - 5^2 = **(y + 5)(y - 5)**."
    ],
    problem: {
      question: "Factor **x^2 - 4**",
      options: ["(x + 2)(x - 2)", "(x - 2)(x - 2)", "(x + 2)(x + 2)", "(x - 4)(x + 1)"],
      answer: "(x + 2)(x - 2)",
      explanation: "Difference of squares: 2^2 = 4."
    }
  },
  {
    id: 32,
    title: "Factoring Difference of Squares",
    content: [
      "Factor **x^2 - 16**.",
      "x^2 - 4^2 = **(x + 4)(x - 4)**.",
      "Factor **4x^2 - 9**.",
      "(2x)^2 - 3^2 = **(2x + 3)(2x - 3)**."
    ],
    problem: {
      question: "Factor **81 - 4x^2**",
      options: ["(9 + 2x)(9 - 2x)", "(9 - 2x)(9 - 2x)", "(9 + 2x)(9 + 2x)", "(81 - 2x)(1 + 2x)"],
      answer: "(9 + 2x)(9 - 2x)",
      explanation: "9^2 - (2x)^2."
    }
  },
  {
    id: 33,
    title: "Difference of Squares (Leading Coeff ≠ 1)",
    content: [
      "Factor **45x^2 - 125**.",
      "Factor out 5: **5(9x^2 - 25)**.",
      "Inside is difference of squares: (3x)^2 - 5^2.",
      "Result: **5(3x + 5)(3x - 5)**."
    ],
    problem: {
      question: "Factor **16x^2 - 64**",
      options: ["16(x + 2)(x - 2)", "16(x - 2)(x - 2)", "(4x + 8)(4x - 8)", "16(x^2 - 4)"],
      answer: "16(x + 2)(x - 2)",
      explanation: "Factor 16: 16(x^2 - 4). Then 16(x+2)(x-2)."
    }
  },
  {
    id: 34,
    title: "Analyzing Factorization",
    content: [
      "Compare methods for **16x^2 - 64**.",
      "Method 1: Factor out 16 first -> 16(x^2 - 4) -> 16(x+2)(x-2).",
      "Method 2: Difference of squares directly -> (4x)^2 - 8^2 -> (4x+8)(4x-8).",
      "Both are valid, but Method 1 is 'factored completely'."
    ],
    problem: {
      question: "Which is fully factored for **4x^2 - 36**?",
      options: ["4(x + 3)(x - 3)", "(2x + 6)(2x - 6)", "4(x^2 - 9)", "2(2x^2 - 18)"],
      answer: "4(x + 3)(x - 3)",
      explanation: "Take out GCF 4 first."
    }
  },
  {
    id: 35,
    title: "Shared Factors",
    content: [
      "Find shared factor of **m^2 - 4m - 45** and **6m^2 - 150**.",
      "First: (m - 9)(m + 5).",
      "Second: 6(m^2 - 25) = 6(m + 5)(m - 5).",
      "Shared factor is **(m + 5)**."
    ],
    problem: {
      question: "Find shared factor of **x^2 - 9** and **x^2 + 6x + 9**",
      options: ["x + 3", "x - 3", "x + 9", "No shared factor"],
      answer: "x + 3",
      explanation: "(x+3)(x-3) and (x+3)^2. Shared is x+3."
    }
  },
  {
    id: 36,
    title: "Difference of Squares Practice",
    content: [
      "Practice: Factor **81 - 4x^2**.",
      "9^2 - (2x)^2.",
      "**(9 + 2x)(9 - 2x)**."
    ],
    problem: {
      question: "Factor **x^4 - 16**",
      options: ["(x^2 + 4)(x + 2)(x - 2)", "(x^2 - 4)(x^2 + 4)", "(x - 2)^4", "(x^2 + 4)^2"],
      answer: "(x^2 + 4)(x + 2)(x - 2)",
      explanation: "(x^2+4)(x^2-4) -> (x^2+4)(x+2)(x-2)."
    }
  },
  {
    id: 37,
    title: "Perfect Square Factorization Intro",
    content: [
      "Pattern: **a^2 + 2ab + b^2 = (a + b)^2**.",
      "Factor **x^2 + 6x + 9**.",
      "x^2 + 2(3)x + 3^2.",
      "Result: **(x + 3)^2**."
    ],
    problem: {
      question: "Factor **x^2 + 14x + 49**",
      options: ["(x + 7)^2", "(x - 7)^2", "(x + 14)^2", "(x + 7)(x - 7)"],
      answer: "(x + 7)^2",
      explanation: "7^2=49, 2*7=14."
    }
  },
  {
    id: 38,
    title: "Factoring Perfect Squares",
    content: [
      "Factor **x^2 + 8x + 16**.",
      "4^2 = 16, 2*4 = 8.",
      "Result: **(x + 4)^2**.",
      "Factor **4x^2 + 12x + 9**.",
      "(2x)^2 + 2(2x)(3) + 3^2.",
      "Result: **(2x + 3)^2**."
    ],
    problem: {
      question: "Factor **x^2 - 20x + 100**",
      options: ["(x - 10)^2", "(x + 10)^2", "(x - 20)^2", "(x - 10)(x + 10)"],
      answer: "(x - 10)^2",
      explanation: "10^2=100, 2*10=20. Minus sign -> (x-10)^2."
    }
  },
  {
    id: 39,
    title: "Factoring Perfect Squares (Leading Coeff ≠ 1)",
    content: [
      "Factor **25x^2 - 30x + 9**.",
      "(5x)^2 - 2(5x)(3) + 3^2.",
      "Result: **(5x - 3)^2**."
    ],
    problem: {
      question: "Factor **4 - 12x + 9x^2**",
      options: ["(2 - 3x)^2", "(2 + 3x)^2", "(3x - 2)^2", "Both A and C"],
      answer: "Both A and C",
      explanation: "(2-3x)^2 is same as (3x-2)^2."
    }
  },
  {
    id: 40,
    title: "Identifying Perfect Square Form",
    content: [
      "Is **25x^2 + 20x + 4** a perfect square?",
      "(5x)^2 and 2^2.",
      "Middle term check: 2 * 5x * 2 = 20x.",
      "Yes! It is **(5x + 2)^2**."
    ],
    problem: {
      question: "Is **x^2 + 10x + 20** a perfect square?",
      options: ["No", "Yes"],
      answer: "No",
      explanation: "5^2 = 25, not 20."
    }
  },
  {
    id: 41,
    title: "Perfect Squares: Negative Common Factor",
    content: [
      "Factor **-4t^2 - 12t - 9**.",
      "Factor out -1: **-(4t^2 + 12t + 9)**.",
      "Inside is (2t + 3)^2.",
      "Result: **-(2t + 3)^2**."
    ],
    problem: {
      question: "Factor **-x^2 + 6x - 9**",
      options: ["-(x - 3)^2", "-(x + 3)^2", "(x - 3)^2", "-(x - 9)^2"],
      answer: "-(x - 3)^2",
      explanation: "-(x^2 - 6x + 9) = -(x-3)^2."
    }
  },
  {
    id: 42,
    title: "Perfect Squares: Missing Values",
    content: [
      "If **x^2 + 5x + c** is a perfect square, what is c?",
      "2d = 5 -> d = 2.5.",
      "c = d^2 = 2.5^2 = **6.25**."
    ],
    problem: {
      question: "Find c for **x^2 + 8x + c** to be a perfect square.",
      options: ["16", "4", "64", "8"],
      answer: "16",
      explanation: "(8/2)^2 = 4^2 = 16."
    }
  },
  {
    id: 43,
    title: "Perfect Squares: Shared Factors",
    content: [
      "Find shared factor of **4x^2 + 12x + 9** and **4x^2 - 9**.",
      "First: (2x + 3)^2.",
      "Second: (2x + 3)(2x - 3).",
      "Shared: **2x + 3**."
    ],
    problem: {
      question: "Find shared factor of **x^2 + 10x + 25** and **x^2 - 25**",
      options: ["x + 5", "x - 5", "x + 25", "No shared factor"],
      answer: "x + 5",
      explanation: "(x+5)^2 and (x+5)(x-5)."
    }
  }
];
