import React, { Component } from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import { Container, Col } from "reactstrap";

import EditorPlugin from "../plugins/editor"
import LocalStoragePlugin from "../plugins/local-storage"
import ValidateBasePlugin from "../plugins/validate-base"
import ValidateSemanticPlugin from "../plugins/validate-semantic"
import ValidateJsonSchemaPlugin from "../plugins/json-schema-validator"
import EditorAutosuggestPlugin from "../plugins/editor-autosuggest"
import EditorAutosuggestSnippetsPlugin from "../plugins/editor-autosuggest-snippets"
import EditorAutosuggestKeywordsPlugin from "../plugins/editor-autosuggest-keywords"
import EditorAutosuggestOAS3KeywordsPlugin from "../plugins/editor-autosuggest-oas3-keywords"
import EditorAutosuggestRefsPlugin from "../plugins/editor-autosuggest-refs"
import PerformancePlugin from "../plugins/performance"
import JumpToPathPlugin from "../plugins/jump-to-path"
import SplitPaneModePlugin from "../plugins/split-pane-mode"
import ASTPlugin from "../plugins/ast"
import EditorLayout from "../layout"


export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    //this.populateWeatherData();
  }

  render() {
    const plugins = [
      EditorPlugin,
      //ValidateBasePlugin,
      //ValidateSemanticPlugin,
      //ValidateJsonSchemaPlugin,
      LocalStoragePlugin,
      EditorAutosuggestPlugin,
      EditorAutosuggestSnippetsPlugin,
      EditorAutosuggestKeywordsPlugin,
      EditorAutosuggestRefsPlugin,
      EditorAutosuggestOAS3KeywordsPlugin,
      PerformancePlugin,
      //JumpToPathPlugin,
      SplitPaneModePlugin,
      ASTPlugin,
      () => ({ components: { EditorLayout } }),
      SwaggerUI.plugins.SafeRender({
          fullOverride: true,
          componentList: [
            "EditorLayout",
            "EditorContainer"
          ]
        }
      )
    ]

    return (
      <SwaggerUI
        url="https://petstore.swagger.io/v2/swagger.yaml"
        plugins={plugins}
        layout="EditorLayout"
      />
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
