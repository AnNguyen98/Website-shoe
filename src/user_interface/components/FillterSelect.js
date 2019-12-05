import React, { Component } from "react";
import {
  Grid,
  Card,
  Radio,
  FormControlLabel,
  RadioGroup
} from "@material-ui/core";
import InputRangeCustom from "../components/InputRangeCustom";
import axios from "axios";
import "./Footer.css";

const categoriesUrl = "https://webttcn.herokuapp.com/v1/categories";

export default class FillterSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: "",
      categoryName: "",
      categories: [],
      price: { min: 0, max: 100 },
      priceValue: 0
    };
  }

  componentDidMount() {
    axios
      .get(categoriesUrl)
      .then(res => {
        this.setState({
          categories: res.data,
          categoryID: res.data[0]._id
        });
        var fillter = {
          price: this.state.price,
          category: {
            _id: res.data[0]._id,
            name: res.data[0].name
          }
        };
        this.handleFillterOnChange(fillter);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <Grid item xs={2}>
        <p style={{ fontWeight: "bold", fontSize: 25 }}>{this.props.title}</p>
        <Card style={{ padding: 10 }}>Bộ lọc kết quả</Card>
        <Card style={{ marginTop: 30 }}>
          <Card style={{ padding: 10 }}>Theo thương hiệu</Card>
          <Grid container justify="flex-start" className="center-select">
            <RadioGroup
              style={{ width: 200 }}
              value={this.state.categoryID}
              onChange={this.handleChangeCategory.bind(this)}
            >
              {this.state.categories.map(category => (
                <div>
                  <Grid>
                    <FormControlLabel
                      style={{ marginLeft: 20, width: 200 }}
                      control={<Radio value={category._id} />}
                      label={category.name}
                    />
                  </Grid>
                  <br />
                </div>
              ))}
            </RadioGroup>
          </Grid>
        </Card>
        <Card style={{ marginTop: 30, padding: 30 }}>
          <Card style={{ padding: 10, marginBottom: 30 }}>
            Theo giá (Ngàn đồng)
          </Card>
          <InputRangeCustom
            onChangePrice={price => {
              this.setState({
                price: price
              });
              var fillterTemp = {
                price: price,
                category: {
                  _id: this.state.categoryID,
                  name: this.state.categoryName
                }
              };
              this.handleFillterOnChange(fillterTemp);
            }}
          />
        </Card>
      </Grid>
    );
  }
  handleFillterOnChange(fillterTemp) {
    this.props.onFillterChange(fillterTemp);
  }
  handleChangeCategory(event) {
    var categoryNameTemp = "";
    this.state.categories.forEach(category => {
      if (category._id === event.target.value) {
        categoryNameTemp = category.name;
      }
    });
    var fillterTemp = {
      price: this.state.price,
      category: {
        _id: event.target.value,
        name: categoryNameTemp
      }
    };
    this.setState({
      categoryID: event.target.value
    });
    this.handleFillterOnChange(fillterTemp);
  }
}
