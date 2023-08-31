// @ts-nocheck

import { writeFileSync } from "fs";

const $schema =
  "https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/schema.json";

const defaultTemplate = `{{ if .Error }}{{ if eq .Error "NO VERSION" }}N/A{{ else }}{{ .Error }}{{ end }} {{ else }}{{ if .Full }}<b>{{ .Full }}</b> {{ end }}{{ end }}`;

const colors = {
  rosewater: "#f5e0dc",
  flamingo: "#f2cdcd",
  pink: "#f5c2e7",
  mauve: "#cba6f7",
  red: "#f38ba8",
  maroon: "#eba0ac",
  peach: "#fab387",
  yellow: "#f9e2af",
  green: "#a6e3a1",
  teal: "#94e2d5",
  sky: "#89dceb",
  sapphire: "#74c7ec",
  blue: "#89b4fa",
  lavender: "#b4befe",
  text: "#cdd6f4",
  subtext1: "#bac2de",
  subtext0: "#a6adc8",
  overlay2: "#9399b2",
  overlay1: "#7f849c",
  overlay0: "#6c7086",
  surface2: "#585b70",
  surface1: "#45475a",
  surface0: "#313244",
  base: "#1e1e2e",
  mantle: "#181825",
  crust: "#11111b",
  angular: "#dd0031",
  aws: "#f79919",
  azure: "#0072c6",
  azure_functions: "#ffbf00",
  cds: "#0092d1",
  cloud_foundry: "#2e5797",
  cloud_foundry_target: "#2e5797",
  cmake: "#cc1010",
  crystal: "#010101",
  dart: "#00d2b8",
  deno: "#ffffff",
  dotnet: "#1072b8",
  elixir: "#674078",
  flutter: "#16b9fd",
  google_cloud_platform: "#ffce45",
  go: "#69d7e4",
  haskell: "#5e5086",
  java: "#f34336",
  julia: "#9259a3",
  kotlin: "#ff8a00",
  kubectl: "#466bb4",
  lua: "#02027d",
  node: "#5fa04e",
  npm: "#cb3837",
  yarn: "#2c8ebb",
  nx: "#002f56",
  perl: "#3a3c5b",
  php: "#777bb3",
  python: "#3773a5",
  r: "#2369bd",
  ruby: "#ab1401",
  rust: "#f74c00",
  swift: "#f36537",
  terraform: "#5f42e8",
  vala: "#6b5c8e",
  xmake: "#42b983",
};

const blocks = [
  {
    segments: [
      {
        foreground: "$BLUE;",
        template: "<b></b> {{ .Name }} ",
        type: "shell",
      },
      {
        foreground: "$PEACH;",
        properties: {
          folder_icon: "",
          home_icon: "",
          style: "agnoster_full",
        },
        template: " {{ .Path }} ",
        type: "path",
      },
      {
        foreground_templates: ["{{ if gt .Code 0 }}$RED;{{ end }}"],
        properties: {
          always_enabled: false,
        },
        template: "{{ if gt .Code 0 }}<b>{{ .Code }}</b>{{ end }}",
        type: "exit",
      },
    ],
    newline: false,
  },
  {
    segments: [
      {
        foreground: "$LAVENDER;",
        template:
          ' {{ if .Error }}{{ if eq .Error "NO VERSION" }}N/A{{ else }}{{ .Error }}{{ end }} {{ else }}{{ if .Version }}{{ if .Version }}<b>{{ .Version }}</b> {{ end }}{{ end }}{{ if .Name }}{{ .Name }} {{ end }}{{ end }}',
        type: "project",
      },
      {
        foreground: "$ANGULAR;",
        template:
          ' {{ if .Error }}{{ if eq .Error "cannot get version" }}N/A{{ else }}{{ .Error }}{{ end }} {{ else }}{{ if .Full }}<b>{{ .Full }}</b> {{ end }}{{ end }}',
        type: "angular",
      },
      {
        foreground: "$AWS;",
        template: " {{.Profile}}{{if .Region}}@{{.Region}}{{end}}",
        type: "aws",
      },
      {
        foreground: "$AZURE;",
        template: "ﴃ {{ .EnvironmentName }}",
        type: "az",
      },
      {
        foreground: "$AZURE_FUNCTIONS;",
        icon: "",
        type: "azfunc",
      },
      {
        foreground: "$CDS;",
        icon: "",
        type: "cds",
      },
      {
        foreground: "$CLOUD_FOUNDRY;",
        icon: "",
        type: "cf",
      },
      {
        foreground: "$CLOUD_FOUNDRY_TARGET;",
        template: " {{ .Org }}/{{ .Space }} ",
        type: "cftarget",
      },
      {
        foreground: "$CMAKE;",
        icon: " ",
        type: "cmake",
      },
      {
        foreground: "$CRYSTAL;",
        icon: "",
        type: "crystal",
      },
      {
        foreground: "$DART;",
        icon: "",
        type: "dart",
      },
      {
        foreground: "$DENO;",
        icon: "ﯤ",
        type: "deno",
      },
      {
        foreground: "$DOTNET;",
        icon: "",
        type: "dotnet",
      },
      {
        foreground: "$ELIXIR;",
        icon: "",
        type: "elixir",
      },
      {
        foreground: "$FLUTTER;",
        icon: "",
        type: "flutter",
      },
      {
        foreground: "$GOOGLE_CLOUD_PLATFORM;",
        template:
          ' {{ if .Error }}{{ if eq .Error "NO VERSION" }}N/A{{ else }}{{ .Error }}{{ end }} {{ else }}{{.Project}} :: {{.Account}}{{ end }}',
        type: "gcp",
      },
      {
        foreground: "$GO;",
        icon: "ﳑ",
        type: "go",
      },
      {
        foreground: "$HASKELL;",
        icon: "",
        type: "haskell",
      },
      {
        foreground: "$JAVA;",
        icon: "",
        type: "java",
      },
      {
        foreground: "$JULIA;",
        icon: "",
        type: "julia",
      },
      {
        foreground: "$KOTLIN;",
        icon: "洞",
        type: "kotlin",
      },
      {
        foreground: "$KUBECTL;",
        properties: {
          parse_kubeconfig: true,
        },
        template: "ﴱ {{.Context}}{{if .Namespace}} :: {{.Namespace}}{{end}}",
        type: "kubectl",
      },
      {
        foreground: "$LUA;",
        icon: "",
        type: "lua",
      },
      {
        foreground: "$NODE;",
        properties: {
          fetch_package_manager: true,
          npm_icon: "<$NPM;></> ",
          yarn_icon: "<$YARN;></> ",
        },
        template:
          ' {{ if .Error }}{{ if eq .Error "NO VERSION" }}N/A{{ else }}{{ .Error }}{{ end }} {{ else }}{{ if .PackageManagerIcon }}{{ .PackageManagerIcon }}{{ end }}{{ if .Full }}<b>{{ .Full }}</b> {{ end }}{{ end }}',
        type: "node",
      },
      {
        foreground: "$NPM;",
        icon: "",
        type: "npm",
      },
      {
        foreground: "$NX;",
        template:
          ' {{ if .Error }}{{ if eq .Error "cannot get version" }}N/A{{ else }}{{ .Error }}{{ end }} {{ else }}{{ if .Full }}<b>{{ .Full }}</b> {{ end }}{{ end }}',
        type: "nx",
      },
      {
        foreground: "$PERL;",
        icon: "",
        type: "perl",
      },
      {
        foreground: "$PHP;",
        icon: "",
        type: "php",
      },
      {
        foreground: "$PYTHON;",
        properties: {
          display_mode: "context",
        },
        icon: "",
        type: "python",
      },
      {
        foreground: "$R;",
        icon: "R",
        type: "r",
      },
      {
        foreground: "$RUBY;",
        icon: "",
        type: "ruby",
      },
      {
        foreground: "$RUST;",
        icon: "",
        type: "rust",
      },
      {
        foreground: "$SWIFT;",
        icon: "",
        type: "swift",
      },
      {
        foreground: "$TERRAFORM;",
        template:
          "{{.WorkspaceName}}{{ if .Version }} {{ .Version }}{{ end }} ",
        type: "terraform",
      },
      {
        foreground: "$VALA;",
        icon: "V",
        type: "vala",
      },
      {
        foreground: "$XMAKE;",
        icon: " make",
        type: "xmake",
      },
    ],
  },
  {
    segments: [
      {
        foreground: "$GREEN;",
        foreground_templates: [
          "{{ if or (.Working.Changed) (.Staging.Changed) }}$YELLOW;{{ end }}",
          "{{ if and (gt .Ahead 0) (gt .Behind 0) }}$PINK;{{ end }}",
          "{{ if gt .Ahead 0 }}$SURFACE2;{{ end }}",
          "{{ if gt .Behind 0 }}$SURFACE2;{{ end }}",
        ],
        properties: {
          branch_icon: " ",
          fetch_status: true,
          fetch_upstream_icon: true,
        },
        template:
          "{{ .UpstreamIcon }}{{ .HEAD }}{{ .BranchStatus }}{{ if .Working.Changed }}  {{ .Working.String }}{{ end }}{{ if and (.Working.Changed) (.Staging.Changed) }} |{{ end }}{{ if .Staging.Changed }}<$RED;>  {{ .Staging.String }}</>{{ end }} ",
        type: "git",
      },
    ],
  },
  {
    segments: [
      {
        foreground: "$PINK;",
        type: "text",
        template: " Astolfo uwu",
      },
    ],
    alignment: "right",
    newline: false,
  },
  {
    segments: [
      {
        foreground: "$MAUVE;",
        properties: {
          linux: "",
          macos: "",
          windows: "",
        },
        template: "{{.Icon}} ",
        type: "os",
      },
      {
        foreground: "$PEACH;",
        template: " ",
        type: "root",
      },
      {
        foreground: "$GREEN;",
        foreground_templates: ["{{ if gt .Code 0 }}$RED;{{ end }}"],
        properties: {
          always_enabled: true,
        },
        template: "ﬀ ",
        type: "exit",
      },
    ],
  },
];

const theme = {
  $schema,
  blocks: blocks.map(generateBlock),
  transient_prompt: {
    background: "transparent",
    foreground: "$GREEN;",
    foreground_templates: ["{{ if gt .Code 0 }}$RED;{{ end }}"],
    template: "ﬀ ",
  },
  version: 2,
};

let themeString = JSON.stringify(theme, null, 2);

Object.keys(colors).forEach((key) => {
  themeString = themeString.replaceAll(`$${key.toUpperCase()};`, colors[key]);
});

writeFileSync("theme.json", themeString);

function generateBlock({
  alignment = "left",
  segments = [],
  type = "prompt",
  newline = true,
}) {
  return {
    alignment,
    segments: segments.map(generateSegment),
    type,
    newline,
  };
}

function generateSegment({
  style = "plain",
  template = null,
  type = null,
  properties = undefined,
  foreground = undefined,
  foreground_templates = undefined,
  background = undefined,
  background_templates = undefined,
  icon = null,
  no_type = false,
}) {
  if (!type && !no_type) throw new Error(`No type provided`);
  if (!icon && !template) throw new Error(`No icon provided for type ${type}`);
  return {
    style,
    template: template || `${icon} ${defaultTemplate}`,
    properties,
    foreground,
    foreground_templates,
    background,
    background_templates,
    type,
  };
}
