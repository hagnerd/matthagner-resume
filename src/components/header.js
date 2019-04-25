import React, { useRef } from "react";
import {
  useChain,
  useSpring,
  useTransition,
  animated,
  config
} from "react-spring/hooks";

import {
  Avatar,
  Title,
  HeaderContainer,
  SubTitle,
  Hr
} from "./header.elements";

export default function Header({ avatar }) {
  const [bgSpringRef, bgSpringStyles] = useBgAnimation();
  const [descriptionRef, descriptionStyles] = useDescriptionAnimation();
  const [avatarSpringRef, avatarSpringStyles] = useAvatarAnimation();
  const [firstNameRef, firstNameTransition] = useTrailingLetterTransition(
    "matt"
  );
  const [lastNameRef, lastNameTransition] = useTrailingLetterTransition(
    "hagner"
  );

  useChain([
    bgSpringRef,
    descriptionRef,
    avatarSpringRef,
    firstNameRef,
    lastNameRef
  ]);

  return (
    <HeaderContainer style={bgSpringStyles}>
      <animated.div style={avatarSpringStyles}>
        <Avatar fluid={avatar.childImageSharp.fluid} />
      </animated.div>
      <div>
        <div style={{ display: "flex" }}>
          <TrailTitle transition={firstNameTransition} />
          <span style={{ marginLeft: "12px" }} />
          <TrailTitle transition={lastNameTransition} />
        </div>
        <Hr />
        <SubTitle style={descriptionStyles}>FULLSTACK DEVELOPER</SubTitle>
      </div>
    </HeaderContainer>
  );
}

function useBgAnimation() {
  const ref = useRef();
  const styles = useSpring({
    ref,
    native: true,
    config: config.wobbly,
    opacity: 1,
    transform: "translate3d(0,0,0)",
    from: { opacity: 0, transform: "translate3d(0, -240px, 0)" }
  });
  return [ref, styles];
}

function useTrailingLetterTransition(string) {
  const ref = useRef();
  const items = string.split("");
  const styles = useTransition({
    ref,
    native: true,
    items,
    keys: (_, index) => index,
    trail: 300 / items.length,
    from: { opacity: 0, transform: "translate3d(0, -10px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0, -10px,0)" }
  });

  return [ref, styles];
}

function useDescriptionAnimation() {
  const ref = useRef();
  const styles = useSpring({
    ref,
    native: true,
    opacity: 1,
    from: { opacity: 0 }
  });
  return [ref, styles];
}

function useAvatarAnimation() {
  const ref = useRef();
  const styles = useSpring({
    ref,
    native: true,
    config: config.wobbly,
    opacity: 1,
    transform: "translate3d(0,0,0)",
    from: { opacity: 0, transform: "translate3d(-100px, 0, 0)" }
  });
  return [ref, styles];
}

function TrailTitle({ transition }) {
  return transition.map(({ item, key, props }) => (
    <animated.div key={key} style={props}>
      <Title>{item}</Title>
    </animated.div>
  ));
}
