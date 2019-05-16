package com.example.liugq.bean.dzm;

import java.io.Serializable;

public class QiBao implements Serializable {
    private Integer id;

    private String name;

    private String mainProperty;

    private String mainPropertyName;

    private String secondaryProperty1;

    private String secondaryPropertyName1;

    private String secondaryProperty2;

    private String secondaryPropertyName2;

    private String secondLevelPropertyName;

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

    public String getMainProperty() {
        return mainProperty;
    }

    public void setMainProperty(String mainProperty) {
        this.mainProperty = mainProperty == null ? null : mainProperty.trim();
    }

    public String getMainPropertyName() {
        return mainPropertyName;
    }

    public void setMainPropertyName(String mainPropertyName) {
        this.mainPropertyName = mainPropertyName == null ? null : mainPropertyName.trim();
    }

    public String getSecondaryProperty1() {
        return secondaryProperty1;
    }

    public void setSecondaryProperty1(String secondaryProperty1) {
        this.secondaryProperty1 = secondaryProperty1 == null ? null : secondaryProperty1.trim();
    }

    public String getSecondaryPropertyName1() {
        return secondaryPropertyName1;
    }

    public void setSecondaryPropertyName1(String secondaryPropertyName1) {
        this.secondaryPropertyName1 = secondaryPropertyName1 == null ? null : secondaryPropertyName1.trim();
    }

    public String getSecondaryProperty2() {
        return secondaryProperty2;
    }

    public void setSecondaryProperty2(String secondaryProperty2) {
        this.secondaryProperty2 = secondaryProperty2 == null ? null : secondaryProperty2.trim();
    }

    public String getSecondaryPropertyName2() {
        return secondaryPropertyName2;
    }

    public void setSecondaryPropertyName2(String secondaryPropertyName2) {
        this.secondaryPropertyName2 = secondaryPropertyName2 == null ? null : secondaryPropertyName2.trim();
    }

    public String getSecondLevelPropertyName() {
        return secondLevelPropertyName;
    }

    public void setSecondLevelPropertyName(String secondLevelPropertyName) {
        this.secondLevelPropertyName = secondLevelPropertyName == null ? null : secondLevelPropertyName.trim();
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
        QiBao other = (QiBao) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getMainProperty() == null ? other.getMainProperty() == null : this.getMainProperty().equals(other.getMainProperty()))
            && (this.getMainPropertyName() == null ? other.getMainPropertyName() == null : this.getMainPropertyName().equals(other.getMainPropertyName()))
            && (this.getSecondaryProperty1() == null ? other.getSecondaryProperty1() == null : this.getSecondaryProperty1().equals(other.getSecondaryProperty1()))
            && (this.getSecondaryPropertyName1() == null ? other.getSecondaryPropertyName1() == null : this.getSecondaryPropertyName1().equals(other.getSecondaryPropertyName1()))
            && (this.getSecondaryProperty2() == null ? other.getSecondaryProperty2() == null : this.getSecondaryProperty2().equals(other.getSecondaryProperty2()))
            && (this.getSecondaryPropertyName2() == null ? other.getSecondaryPropertyName2() == null : this.getSecondaryPropertyName2().equals(other.getSecondaryPropertyName2()))
            && (this.getSecondLevelPropertyName() == null ? other.getSecondLevelPropertyName() == null : this.getSecondLevelPropertyName().equals(other.getSecondLevelPropertyName()))
            && (this.getSecondLevelProperty() == null ? other.getSecondLevelProperty() == null : this.getSecondLevelProperty().equals(other.getSecondLevelProperty()))
            && (this.getRemark() == null ? other.getRemark() == null : this.getRemark().equals(other.getRemark()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getName() == null) ? 0 : getName().hashCode());
        result = prime * result + ((getMainProperty() == null) ? 0 : getMainProperty().hashCode());
        result = prime * result + ((getMainPropertyName() == null) ? 0 : getMainPropertyName().hashCode());
        result = prime * result + ((getSecondaryProperty1() == null) ? 0 : getSecondaryProperty1().hashCode());
        result = prime * result + ((getSecondaryPropertyName1() == null) ? 0 : getSecondaryPropertyName1().hashCode());
        result = prime * result + ((getSecondaryProperty2() == null) ? 0 : getSecondaryProperty2().hashCode());
        result = prime * result + ((getSecondaryPropertyName2() == null) ? 0 : getSecondaryPropertyName2().hashCode());
        result = prime * result + ((getSecondLevelPropertyName() == null) ? 0 : getSecondLevelPropertyName().hashCode());
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
        sb.append(", mainProperty=").append(mainProperty);
        sb.append(", mainPropertyName=").append(mainPropertyName);
        sb.append(", secondaryProperty1=").append(secondaryProperty1);
        sb.append(", secondaryPropertyName1=").append(secondaryPropertyName1);
        sb.append(", secondaryProperty2=").append(secondaryProperty2);
        sb.append(", secondaryPropertyName2=").append(secondaryPropertyName2);
        sb.append(", secondLevelPropertyName=").append(secondLevelPropertyName);
        sb.append(", secondLevelProperty=").append(secondLevelProperty);
        sb.append(", remark=").append(remark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}