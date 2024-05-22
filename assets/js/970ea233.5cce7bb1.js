"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5980],{88593:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(85893),l=t(11151);const o={sidebar_label:"file_logger",title:"logger.file_logger"},i=void 0,c={id:"reference/logger/file_logger",title:"logger.file_logger",description:"FileLogger",source:"@site/docs/reference/logger/file_logger.md",sourceDirName:"reference/logger",slug:"/reference/logger/file_logger",permalink:"/autogen/docs/reference/logger/file_logger",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/logger/file_logger.md",tags:[],version:"current",frontMatter:{sidebar_label:"file_logger",title:"logger.file_logger"},sidebar:"referenceSideBar",previous:{title:"base_logger",permalink:"/autogen/docs/reference/logger/base_logger"},next:{title:"client",permalink:"/autogen/docs/reference/oai/client"}},s={},a=[{value:"FileLogger",id:"filelogger",level:2},{value:"start",id:"start",level:3},{value:"log_chat_completion",id:"log_chat_completion",level:3},{value:"log_new_agent",id:"log_new_agent",level:3},{value:"log_event",id:"log_event",level:3},{value:"log_new_wrapper",id:"log_new_wrapper",level:3},{value:"log_new_client",id:"log_new_client",level:3},{value:"get_connection",id:"get_connection",level:3},{value:"stop",id:"stop",level:3}];function g(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"filelogger",children:"FileLogger"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class FileLogger(BaseLogger)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"start",children:"start"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def start() -> str\n"})}),"\n",(0,r.jsx)(n.p,{children:"Start the logger and return the session_id."}),"\n",(0,r.jsx)(n.h3,{id:"log_chat_completion",children:"log_chat_completion"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def log_chat_completion(invocation_id: uuid.UUID, client_id: int,\n                        wrapper_id: int, request: Dict[str,\n                                                       Union[float, str,\n                                                             List[Dict[str,\n                                                                       str]]]],\n                        response: Union[str, ChatCompletion], is_cached: int,\n                        cost: float, start_time: str) -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"Log a chat completion."}),"\n",(0,r.jsx)(n.h3,{id:"log_new_agent",children:"log_new_agent"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def log_new_agent(agent: ConversableAgent,\n                  init_args: Dict[str, Any] = {}) -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"Log a new agent instance."}),"\n",(0,r.jsx)(n.h3,{id:"log_event",children:"log_event"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def log_event(source: Union[str, Agent], name: str,\n              **kwargs: Dict[str, Any]) -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"Log an event from an agent or a string source."}),"\n",(0,r.jsx)(n.h3,{id:"log_new_wrapper",children:"log_new_wrapper"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def log_new_wrapper(\n        wrapper: OpenAIWrapper,\n        init_args: Dict[str, Union[LLMConfig, List[LLMConfig]]] = {}) -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"Log a new wrapper instance."}),"\n",(0,r.jsx)(n.h3,{id:"log_new_client",children:"log_new_client"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def log_new_client(client: AzureOpenAI | OpenAI, wrapper: OpenAIWrapper,\n                   init_args: Dict[str, Any]) -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"Log a new client instance."}),"\n",(0,r.jsx)(n.h3,{id:"get_connection",children:"get_connection"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def get_connection() -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"Method is intentionally left blank because there is no specific connection needed for the FileLogger."}),"\n",(0,r.jsx)(n.h3,{id:"stop",children:"stop"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def stop() -> None\n"})}),"\n",(0,r.jsx)(n.p,{children:"Close the file handler and remove it from the logger."})]})}function d(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(67294);const l={},o=r.createContext(l);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);