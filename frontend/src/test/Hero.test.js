import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero.js";

describe("Hero Component", () => {
  beforeEach(() => {
    render(<Hero />);
  });

  describe("Image Rendering", () => {
    test("renders hero image with correct src and alt text", () => {
      const heroImage = screen.getByAltText("Zerodha Home Hero");
      expect(heroImage).toBeInTheDocument();
      expect(heroImage).toHaveAttribute("src", "/assets/homeHero.png");
    });

    test("hero image has correct CSS classes", () => {
      const heroImage = screen.getByAltText("Zerodha Home Hero");
      expect(heroImage).toHaveClass("mb-5");
    });
  });

  describe("Text Content", () => {
    test("renders main heading", () => {
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent("Invest in everything");
    });

    test("renders descriptive paragraph", () => {
      const description = screen.getByText(
        "Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more."
      );
      expect(description).toBeInTheDocument();
      expect(description.tagName).toBe("P");
    });
  });

  describe("Sign Up Button", () => {
    test("renders signup button with correct text", () => {
      const signupButton = screen.getByRole("button", {
        name: "SignUp for free",
      });
      expect(signupButton).toBeInTheDocument();
      expect(signupButton).toHaveTextContent("SignUp for free");
    });

    test("signup button has correct CSS classes", () => {
      const signupButton = screen.getByRole("button", {
        name: "SignUp for free",
      });
      expect(signupButton).toHaveClass("p-2");
      expect(signupButton).toHaveClass("btn");
      expect(signupButton).toHaveClass("btn-primary");
      expect(signupButton).toHaveClass("fs-5");
      expect(signupButton).toHaveClass("mb-5");
    });

    test("signup button has correct inline styles", () => {
      const signupButton = screen.getByRole("button", {
        name: "SignUp for free",
      });
      expect(signupButton).toHaveStyle({
        width: "20%",
        margin: "0 auto",
      });
    });

    test("signup button is clickable", () => {
      const signupButton = screen.getByRole("button", {
        name: "SignUp for free",
      });
      expect(signupButton).toBeEnabled();

      // Test if button can be clicked (though no actual click handler is implemented)
      fireEvent.click(signupButton);
      expect(signupButton).toBeInTheDocument(); // Button should still be present after click
    });
  });

  describe("Layout and Structure", () => {
    test("has correct container structure", () => {
      const container = document.querySelector(".container.mb-5");
      expect(container).toBeInTheDocument();
    });

    test("has correct row structure with text-center class", () => {
      const row = document.querySelector(".row.text-center");
      expect(row).toBeInTheDocument();
    });

    test("has text-center div wrapper", () => {
      const textCenterDiv = document.querySelector(".text-center");
      expect(textCenterDiv).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    test("hero image has meaningful alt text", () => {
      const heroImage = screen.getByAltText("Zerodha Home Hero");
      expect(heroImage).toHaveAttribute("alt", "Zerodha Home Hero");
    });

    test("heading structure is semantic", () => {
      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading).toBeInTheDocument();
    });

    test("button is keyboard accessible", () => {
      const signupButton = screen.getByRole("button", {
        name: "SignUp for free",
      });
      signupButton.focus();
      expect(signupButton).toHaveFocus();
    });
  });

  describe("Content Validation", () => {
    test("all expected text content is present", () => {
      expect(screen.getByText("Invest in everything")).toBeInTheDocument();
      expect(screen.getByText(/Online platform to invest/)).toBeInTheDocument();
      expect(
        screen.getByText(/stocks, derivatives, mutual funds/)
      ).toBeInTheDocument();
      expect(screen.getByText(/ETFs, bonds, and more/)).toBeInTheDocument();
      expect(screen.getByText("SignUp for free")).toBeInTheDocument();
    });

    test("component renders without crashing", () => {
      expect(() => render(<Hero />)).not.toThrow();
    });
  });

  describe("Bootstrap Classes", () => {
    test("uses Bootstrap utility classes correctly", () => {
      const container = document.querySelector(".container");
      const row = document.querySelector(".row");
      const button = screen.getByRole("button");

      expect(container).toHaveClass("mb-5");
      expect(row).toHaveClass("text-center");
      expect(button).toHaveClass("btn", "btn-primary");
    });
  });
});
