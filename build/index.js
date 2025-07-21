var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
));

// empty-module:~/utils/auth.client
var require_auth = __commonJS({
  "empty-module:~/utils/auth.client"(exports, module) {
    module.exports = {};
  }
});

// empty-module:~/utils/storage.client
var require_storage = __commonJS({
  "empty-module:~/utils/storage.client"(exports, module) {
    module.exports = {};
  }
});

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";

// app/styles/app.css
var app_default = "/build/_assets/app-62PAQRAD.css";

// app/components/Header.tsx
var import_auth = __toESM(require_auth(), 1);
import { NavLink, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function Header() {
  let [user, setUser] = useState(null), navigate = useNavigate();
  return useEffect(() => {
    setUser((0, import_auth.getSessionUser)());
  }, [user]), /* @__PURE__ */ jsxDEV2("header", { className: "main-header", children: [
    /* @__PURE__ */ jsxDEV2("nav", { children: [
      /* @__PURE__ */ jsxDEV2(NavLink, { to: "/", children: "In\xEDcio" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(NavLink, { to: "/relatar", children: "Relatar" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(NavLink, { to: "/ocorrencias", children: "Ocorr\xEAncias" }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Header.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    user && // Removemos o <Form> e usamos um botão com onClick
    /* @__PURE__ */ jsxDEV2("button", { type: "button", onClick: () => {
      (0, import_auth.logout)(), setUser(null), navigate("/");
    }, className: "btn btn-logout", children: "Sair" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 30,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: app_default },
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : []
];
function App() {
  return /* @__PURE__ */ jsxDEV3("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3("div", { className: "container", children: [
        /* @__PURE__ */ jsxDEV3(Header, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV3("main", { children: /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/ocorrencias._index.tsx
var ocorrencias_index_exports = {};
__export(ocorrencias_index_exports, {
  default: () => OcorrenciasLista
});
var import_storage = __toESM(require_storage(), 1);
import { Link } from "@remix-run/react";
import { useEffect as useEffect2, useState as useState2 } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function OcorrenciasLista() {
  let [occurrences, setOccurrences] = useState2([]);
  return useEffect2(() => {
    setOccurrences((0, import_storage.getOccurrences)());
  }, []), /* @__PURE__ */ jsxDEV4("div", { style: { marginTop: "2rem" }, children: [
    /* @__PURE__ */ jsxDEV4("h2", { children: "Ocorr\xEAncias recentes no Bairro Centro" }, void 0, !1, {
      fileName: "app/routes/ocorrencias._index.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    occurrences.length > 0 ? occurrences.map((occ) => /* @__PURE__ */ jsxDEV4("div", { className: "occurrence-card", children: [
      /* @__PURE__ */ jsxDEV4("h3", { children: /* @__PURE__ */ jsxDEV4(Link, { to: `/ocorrencias/${occ.id}`, style: { textDecoration: "none", color: "inherit" }, children: [
        occ.crime,
        " \u2014 ",
        new Date(occ.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })
      ] }, void 0, !0, {
        fileName: "app/routes/ocorrencias._index.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/ocorrencias._index.tsx",
        lineNumber: 20,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { children: occ.descricao }, void 0, !1, {
        fileName: "app/routes/ocorrencias._index.tsx",
        lineNumber: 25,
        columnNumber: 13
      }, this),
      occ.hasBo && /* @__PURE__ */ jsxDEV4("span", { className: "occurrence-info-tag", children: "\u2713 Com BO informado (n\xE3o verificado)" }, void 0, !1, {
        fileName: "app/routes/ocorrencias._index.tsx",
        lineNumber: 26,
        columnNumber: 27
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { style: { marginTop: "1rem", fontSize: "0.9rem", color: "#666" }, children: [
        "\u{1F4AC} ",
        occ.comments.length,
        " coment\xE1rio(s)"
      ] }, void 0, !0, {
        fileName: "app/routes/ocorrencias._index.tsx",
        lineNumber: 27,
        columnNumber: 13
      }, this)
    ] }, occ.id, !0, {
      fileName: "app/routes/ocorrencias._index.tsx",
      lineNumber: 19,
      columnNumber: 11
    }, this)) : /* @__PURE__ */ jsxDEV4("p", { children: "Nenhuma ocorr\xEAncia registrada ainda." }, void 0, !1, {
      fileName: "app/routes/ocorrencias._index.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ocorrencias._index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/ocorrencias.$id.tsx
var ocorrencias_id_exports = {};
__export(ocorrencias_id_exports, {
  default: () => OcorrenciaDetalhe,
  loader: () => loader
});
var import_auth2 = __toESM(require_auth(), 1), import_storage2 = __toESM(require_storage(), 1);
import { Form, useLoaderData, useParams } from "@remix-run/react";
import { useEffect as useEffect3, useState as useState3 } from "react";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var loader = async ({ params }) => ({ id: params.id });
function OcorrenciaDetalhe() {
  let { id } = useLoaderData(), [occurrence, setOccurrence] = useState3(null), [user, setUser] = useState3(null), params = useParams();
  useEffect3(() => {
    let found = (0, import_storage2.getOccurrences)().find((o) => o.id === id) || null;
    setOccurrence(found), setUser((0, import_auth2.getSessionUser)());
  }, [id, params]);
  let handleCommentSubmit = (event) => {
    event.preventDefault();
    let text = new FormData(event.currentTarget).get("comment");
    text && user && id && ((0, import_storage2.addCommentToOccurrence)(id, user, text), setOccurrence((prev) => prev ? { ...prev, comments: [...prev.comments, { author: user, text }] } : null), event.target.reset());
  };
  return occurrence ? /* @__PURE__ */ jsxDEV5("div", { className: "occurrence-card", style: { marginTop: "2rem" }, children: [
    /* @__PURE__ */ jsxDEV5("h2", { children: "Detalhe da Ocorr\xEAncia" }, void 0, !1, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { children: [
      /* @__PURE__ */ jsxDEV5("strong", { children: "Crime:" }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 49,
        columnNumber: 10
      }, this),
      " ",
      occurrence.crime
    ] }, void 0, !0, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { children: [
      /* @__PURE__ */ jsxDEV5("strong", { children: "Local:" }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 50,
        columnNumber: 10
      }, this),
      " ",
      occurrence.local
    ] }, void 0, !0, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { children: [
      /* @__PURE__ */ jsxDEV5("strong", { children: "Data:" }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 51,
        columnNumber: 10
      }, this),
      " ",
      new Date(occurrence.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })
    ] }, void 0, !0, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { children: [
      /* @__PURE__ */ jsxDEV5("strong", { children: "Descri\xE7\xE3o:" }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 52,
        columnNumber: 10
      }, this),
      " ",
      occurrence.descricao
    ] }, void 0, !0, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    occurrence.hasBo && /* @__PURE__ */ jsxDEV5("p", { className: "occurrence-info-tag", children: "\u2713 Com BO informado (n\xE3o verificado)" }, void 0, !1, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 53,
      columnNumber: 28
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "comments-section", children: [
      /* @__PURE__ */ jsxDEV5("h3", { children: "Coment\xE1rios" }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5(Form, { onSubmit: handleCommentSubmit, children: [
        /* @__PURE__ */ jsxDEV5("div", { className: "form-group", children: /* @__PURE__ */ jsxDEV5("textarea", { name: "comment", placeholder: user ? "Deixe seu coment\xE1rio..." : "Fa\xE7a login para comentar", disabled: !user, required: !0 }, void 0, !1, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV5("button", { type: "submit", className: "btn btn-primary", disabled: !user, children: "Enviar" }, void 0, !1, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("div", { className: "comments-list", children: occurrence.comments.map((comment, index) => /* @__PURE__ */ jsxDEV5("div", { className: "comment", children: /* @__PURE__ */ jsxDEV5("p", { children: [
        /* @__PURE__ */ jsxDEV5("strong", { children: [
          comment.author,
          ":"
        ] }, void 0, !0, {
          fileName: "app/routes/ocorrencias.$id.tsx",
          lineNumber: 66,
          columnNumber: 18
        }, this),
        " ",
        comment.text
      ] }, void 0, !0, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this) }, index, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/ocorrencias.$id.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/ocorrencias.$id.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/ocorrencias.$id.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this) : /* @__PURE__ */ jsxDEV5("p", { children: "Ocorr\xEAncia n\xE3o encontrada." }, void 0, !1, {
    fileName: "app/routes/ocorrencias.$id.tsx",
    lineNumber: 43,
    columnNumber: 12
  }, this);
}

// app/routes/relatar.tsx
var relatar_exports = {};
__export(relatar_exports, {
  default: () => RelatarOcorrencia
});
var import_auth3 = __toESM(require_auth(), 1), import_storage3 = __toESM(require_storage(), 1);
import { Form as Form2, useNavigate as useNavigate2 } from "@remix-run/react";
import { useEffect as useEffect4 } from "react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function RelatarOcorrencia() {
  let navigate = useNavigate2();
  return useEffect4(() => {
    (0, import_auth3.getSessionUser)() || navigate("/login?redirectTo=/relatar");
  }, [navigate]), /* @__PURE__ */ jsxDEV6("div", { style: { marginTop: "2rem" }, children: [
    /* @__PURE__ */ jsxDEV6("h2", { children: "Relatar Ocorr\xEAncia" }, void 0, !1, {
      fileName: "app/routes/relatar.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(Form2, { onSubmit: (event) => {
      event.preventDefault();
      let formData = new FormData(event.currentTarget), data = Object.fromEntries(formData), newOccurrenceData = {
        ...data,
        hasBo: data.hasBo === "Sim"
      }, newOccurrence = (0, import_storage3.saveOccurrence)(newOccurrenceData);
      newOccurrence && navigate(`/ocorrencias/${newOccurrence.id}`);
    }, className: "form-container", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxDEV6("label", { htmlFor: "local", children: "\u{1F4CD} Local da ocorr\xEAncia" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("input", { type: "text", id: "local", name: "local", placeholder: "Ex: Rua das Laranjeiras, Bairro Centro", required: !0 }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxDEV6("label", { htmlFor: "data", children: "\u{1F4C5} Data" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 43,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("input", { type: "date", id: "data", name: "data", required: !0 }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxDEV6("label", { htmlFor: "crime", children: "\u{1F6A8} Tipo de crime" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 47,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("select", { id: "crime", name: "crime", required: !0, children: [
          /* @__PURE__ */ jsxDEV6("option", { value: "", children: "Selecione" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("option", { value: "Roubo", children: "Roubo" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("option", { value: "Furto", children: "Furto" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 51,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("option", { value: "Ass\xE9dio", children: "Ass\xE9dio" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 52,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("option", { value: "Agress\xE3o", children: "Agress\xE3o" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ jsxDEV6("option", { value: "Outro", children: "Outro" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxDEV6("label", { htmlFor: "descricao", children: "\u{1F4DD} Descri\xE7\xE3o" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("textarea", { id: "descricao", name: "descricao", placeholder: "Conte o que aconteceu...", required: !0 }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxDEV6("label", { children: "\u{1F4C4} Voc\xEA registrou um boletim de ocorr\xEAncia?" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 62,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("select", { name: "hasBo", defaultValue: "N\xE3o", required: !0, children: [
          /* @__PURE__ */ jsxDEV6("option", { children: "Sim" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV6("option", { children: "N\xE3o" }, void 0, !1, {
            fileName: "app/routes/relatar.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxDEV6("label", { htmlFor: "numeroBo", children: "\u{1F4CE} N\xFAmero do BO (opcional)" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 69,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("input", { type: "text", id: "numeroBo", name: "numeroBo", placeholder: "Ex: 2025-000123456-01" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 70,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 68,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ jsxDEV6("button", { type: "submit", className: "btn btn-primary", children: "Enviar relato" }, void 0, !1, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/relatar.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "info-box", children: [
      /* @__PURE__ */ jsxDEV6("h3", { children: "Por que registrar um BO?" }, void 0, !1, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("p", { children: 'Mesmo que pare\xE7a que "n\xE3o vai dar em nada", o registro fortalece a seguran\xE7a p\xFAblica.' }, void 0, !1, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV6("ul", { children: [
        /* @__PURE__ */ jsxDEV6("li", { children: "Gera dados para pressionar autoridades" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("li", { children: "Serve como base legal para futuras condena\xE7\xF5es" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV6("li", { children: "Pode ser feito online, 100% gratuito" }, void 0, !1, {
          fileName: "app/routes/relatar.tsx",
          lineNumber: 81,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/relatar.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/relatar.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/relatar.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV7("div", { style: { marginTop: "3rem", textAlign: "center" }, children: [
    /* @__PURE__ */ jsxDEV7("h1", { children: "WalkSafe" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { style: { fontSize: "1.2rem" }, children: "Uma plataforma colaborativa para voc\xEA se proteger melhor no seu caminho." }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { children: "Descubra relatos recentes na sua regi\xE3o, compartilhe o que aconteceu com voc\xEA e fortale\xE7a a seguran\xE7a de todos." }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});
import { redirect } from "@remix-run/node";
var action = async ({ request }) => redirect("/");

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login
});
var import_auth4 = __toESM(require_auth(), 1);
import { Form as Form3, useNavigation, useSearchParams } from "@remix-run/react";
import { useNavigate as useNavigate3 } from "react-router-dom";
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
async function action2({ request }) {
  return null;
}
function Login() {
  let [searchParams] = useSearchParams(), redirectTo = searchParams.get("redirectTo") || "/", navigation = useNavigation(), navigate = useNavigate3(), isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ jsxDEV8("div", { className: "form-container", style: { marginTop: "2rem" }, children: [
    /* @__PURE__ */ jsxDEV8("h2", { children: "Login" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8("p", { children: "Para relatar uma ocorr\xEAncia, por favor, fa\xE7a o login. (Qualquer nome de usu\xE1rio \xE9 v\xE1lido)." }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV8(Form3, { onSubmit: (event) => {
      event.preventDefault();
      let username = new FormData(event.currentTarget).get("username");
      username && ((0, import_auth4.createSession)(username), navigate(redirectTo));
    }, method: "post", children: [
      /* @__PURE__ */ jsxDEV8("div", { className: "form-group", children: [
        /* @__PURE__ */ jsxDEV8("label", { htmlFor: "username", children: "Nome de usu\xE1rio" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 36,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV8("input", { type: "text", id: "username", name: "username", required: !0 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 37,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV8("button", { type: "submit", className: "btn btn-primary", disabled: isSubmitting, children: isSubmitting ? "Entrando..." : "Entrar" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HYCKNCP2.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-4ZUTZKNF.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-RYNHHOAA.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-XRJ74ZLL.js", imports: ["/build/_shared/chunk-DQ3S2GML.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ACXW3UZF.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-O6VN4M3H.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-GGSXPJWV.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/ocorrencias.$id": { id: "routes/ocorrencias.$id", parentId: "root", path: "ocorrencias/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/ocorrencias.$id-7DHO5EYZ.js", imports: ["/build/_shared/chunk-Q264KTKJ.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/ocorrencias._index": { id: "routes/ocorrencias._index", parentId: "root", path: "ocorrencias", index: !0, caseSensitive: void 0, module: "/build/routes/ocorrencias._index-BIUP6PM5.js", imports: ["/build/_shared/chunk-Q264KTKJ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/relatar": { id: "routes/relatar", parentId: "root", path: "relatar", index: void 0, caseSensitive: void 0, module: "/build/routes/relatar-BPA4UVO3.js", imports: ["/build/_shared/chunk-Q264KTKJ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "69b73fe8", hmr: { runtime: "/build/_shared/chunk-RYNHHOAA.js", timestamp: 1753107932539 }, url: "/build/manifest-69B73FE8.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/ocorrencias._index": {
    id: "routes/ocorrencias._index",
    parentId: "root",
    path: "ocorrencias",
    index: !0,
    caseSensitive: void 0,
    module: ocorrencias_index_exports
  },
  "routes/ocorrencias.$id": {
    id: "routes/ocorrencias.$id",
    parentId: "root",
    path: "ocorrencias/:id",
    index: void 0,
    caseSensitive: void 0,
    module: ocorrencias_id_exports
  },
  "routes/relatar": {
    id: "routes/relatar",
    parentId: "root",
    path: "relatar",
    index: void 0,
    caseSensitive: void 0,
    module: relatar_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
