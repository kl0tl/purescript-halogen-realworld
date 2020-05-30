let upstream =
      https://raw.githubusercontent.com/kl0tl/package-sets/es-modules/src/packages.dhall sha256:85d11fecbbb043bdd66c34aca2b98362b3e8efeb255d5c94684daa147102fd7b

let overrides =
      { halogen =
          upstream.halogen ⫽ { version = "v5.0.0-rc.7" }
      , halogen-vdom =
          upstream.halogen-vdom ⫽ { version = "v6.1.0" }
      }

let additions =
      { subcategory =
          { dependencies =
              [ "prelude", "profunctor", "record" ]
          , repo =
              "https://github.com/matthew-hilty/purescript-subcategory.git"
          , version =
              "v0.2.0"
          }
      }

in  upstream ⫽ overrides ⫽ additions
