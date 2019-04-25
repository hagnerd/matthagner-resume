import React from "react";

import styled from "@emotion/styled";

import { graphql } from "gatsby";
import Header from "../components/header";

export default props => (
  <div>
    <Header avatar={props.data.avatar} />
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "30%"
        }}
      >
        <Background />
        <Goals />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "70%"
        }}
      >
        <Education />
        <Skills />
        <OtherSkills />
      </div>
    </div>
  </div>
);

export const pageQuery = graphql`
  query {
    avatar: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Section = styled.section`
  margin: 40px 40px 0px 40px;
  width: calc(100% - 80px);
`;

const SideSection = styled.section`
  margin: 40px 40px 0px 40px;
  width: calc(100% - 80px);
`;

function Background() {
  return (
    <Section>
      <h3>background</h3>
      <p style={{ fontSize: "16px" }}>
        A little over a year and a half ago while working in marketing I helped
        a coworker automate the selection of the printer using the origin of the
        print request by writing some JavaScript and I fell in love instantly.
        Ever since then I've immersed myself in the world of programming, and
        more specifically front end and full stack JavaScript development. I've
        completed four of Freecodecamp's six certifications, given a talk at
        React MPLS, applied and have been accepted to Lambda School's part time
        (nights and weekends) program.
      </p>
    </Section>
  );
}

function Goals() {
  return (
    <Section>
      <h3>goals</h3>
      <p style={{ fontSize: "16px" }}>
        My goal is to work at a company that is willing to invest in me, so that
        I can grow and give back tenfold. In five years I'd like to be leading a
        team, empowering other developers, contributing to open source with time
        and money, and sharing my knowledge with others through talks.
      </p>
    </Section>
  );
}

function Skills() {
  return (
    <Section>
      <h2>skills</h2>

      <ul>
        <li>Semantic HTML</li>
        <li>CSS &amp; Modern Layout (Flexbox &amp; Grid)</li>
        <li>React</li>
        <li>Gatsbyjs</li>
        <li>CSS-in-JS (styled-components &amp; emotion)</li>
      </ul>

      <p>Technology I've played with and would like to learn more about:</p>
      <ul>
        <li>ReasonML</li>
        <li>TypeScript</li>
        <li>GraphQL (Backend)</li>
      </ul>
    </Section>
  );
}

function OtherSkills() {
  return (
    <Section>
      <h2>other applicable skills</h2>
      <ul>
        <li>Audio &amp; Video Editing</li>
        <li>SEO &amp; Marketing</li>
        <li>Adobe CC</li>
        <li>Email &amp; Social Media Marketing</li>
      </ul>
    </Section>
  );
}

function Education() {
  return (
    <Section>
      <h2>education</h2>

      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 0
          }}
        >
          <h4 style={{ marginBottom: 0 }}>Lambda School</h4>
          <h4 style={{ marginBottom: 0 }}>Expected March, 2019</h4>
        </div>
        <div>Part Time Full Stack Web Development</div>
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 0
          }}
        >
          <h4 style={{ marginBottom: 0 }}>
            McNally Smith College of Music - St. Paul, MN
          </h4>
          <h4 style={{ marginBottom: 0 }}>Dec, 2016</h4>
        </div>
        <div>Bachelor of Arts in Music Business</div>
      </div>
    </Section>
  );
}

function WorkHistory() {
  return (
    <Section>
      <h2>work history</h2>

      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 0
          }}
        >
          <h4 style={{ marginBottom: 0 }}>M&amp;E Sales</h4>
          <h4 style={{ marginBottom: 0 }}>June, 2016 - Present</h4>
        </div>
        <h5>Marketing / I.T.</h5>
        <ul>
          <li />
        </ul>
      </div>
    </Section>
  );
}
