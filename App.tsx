import StorybookUI from "./.rnstorybook";
import { AppRoot } from "./src";

const isStorybook = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === "true";

export default function App() {
  return isStorybook ? <StorybookUI /> : <AppRoot />;
}
