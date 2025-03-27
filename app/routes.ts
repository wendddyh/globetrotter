import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/index.tsx"),
  route("/country/:code", "routes/country.$code.tsx")
] satisfies RouteConfig;
