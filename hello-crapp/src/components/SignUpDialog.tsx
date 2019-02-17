import * as React from 'react'

interface FBProps {
  color: string
  children: React.ReactChild[]
}

const FancyBorder: React.FC<FBProps> = (props) => (
  <div className={'FancyBorder FancyBorder-' + props.color}>
    {props.children}
  </div>
)

interface DialogProps {
  title: string
  message: string
  children: React.ReactChild
}

const Dialog: React.FC<DialogProps> = (props) => (
  <FancyBorder color="blue">
    <h1 className="Dialog-title">{props.title}</h1>
    <p className="Dialog-message">{props.message}</p>
    {props.children}
  </FancyBorder>
)

interface SignUpState {
  login: string
}

class SignUpDialog extends React.Component<{}, SignUpState> {
  constructor(props: any) {
    super(props);
    this.state = {login: ''};
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({login: event.target.value})
  }

  handleSignUp = () => {
    alert(`Welcome abloard, ${this.state.login}!`)
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program" message="How should we refer to you?">
        <div>
          <input value={this.state.login} onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>  Sign Me Up! </button>
        </div>
      </Dialog>
    );
  }
}

export default SignUpDialog
