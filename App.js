class App extends React.Component {
  state = {
    items: [
      { id: 1, name: 'herbatka', active: true },
      { id: 2, name: 'kasza', active: false },
      { id: 3, name: 'ser bialy', active: false },
      { id: 4, name: 'woda', active: false },
      { id: 5, name: 'likier', active: false },
      { id: 6, name: 'krowka', active: true },
    ],
  }
  handleChangeStatus = (id) => {
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active
      }
      return item
    })
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems items={this.state.items} changeStatus={this.handleChangeStatus} />
      </React.Fragment>
    );
  }
}
