import Typography from "typography";

const typography = new Typography({
  title: "Play Fair",
  baseFontSize: "18px",
  baseLineHeight: 1.65,
  scaleRatio: 3.14,
  googleFonts: [
    {
      name: "Playfair Display",
      styles: ["400", "900"]
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  headerFontFamily: ["Playfair Display", "serif"],
  headerColor: "#444440",
  bodyFontFamily: ["Open Sans", "sans-serif"],
  bodyColor: "#2D2D2D"
});

const { scale, rhythm } = typography;

export default typography;
export { scale, rhythm };
