package com.example.liugq.bean.dzm;

import java.io.Serializable;

public class ZhenQi implements Serializable {
    private Integer id;

    private String name;

    private String property1;

    private String property2;

    private String secondLevelProperty;

    private String remark;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getProperty1() {
        return property1;
    }

    public void setProperty1(String property1) {
        this.property1 = property1 == null ? null : property1.trim();
    }

    public String getProperty2() {
        return property2;
    }

    public void setProperty2(String property2) {
        this.property2 = property2 == null ? null : property2.trim();
    }

    public String getSecondLevelProperty() {
        return secondLevelProperty;
    }

    public void setSecondLevelProperty(String secondLevelProperty) {
        this.secondLevelProperty = secondLevelProperty == null ? null : secondLevelProperty.trim();
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        ZhenQi other = (ZhenQi) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getProperty1() == null ? other.getProperty1() == null : this.getProperty1().equals(other.getProperty1()))
            && (this.getProperty2() == null ? other.getProperty2() == null : this.getProperty2().equals(other.getProperty2()))
            && (this.getSecondLevelProperty() == null ? other.getSecondLevelProperty() == null : this.getSecondLevelProperty().equals(other.getSecondLevelProperty()))
            && (this.getRemark() == null ? other.getRemark() == null : this.getRemark().equals(other.getRemark()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getProperty1() == null) ? 0 : getProperty1().hashCode());
        result = prime * result + ((getProperty2() == null) ? 0 : getProperty2().hashCode());
        result = prime * result + ((getSecondLevelProperty() == null) ? 0 : getSecondLevelProperty().hashCode());
        result = prime * result + ((getRemark() == null) ? 0 : getRemark().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", name=").append(name);
        sb.append(", property1=").append(property1);
        sb.append(", property2=").append(property2);
        sb.append(", secondLevelProperty=").append(secondLevelProperty);
        sb.append(", remark=").append(remark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}