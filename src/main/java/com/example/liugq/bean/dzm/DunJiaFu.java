package com.example.liugq.bean.dzm;

import java.io.Serializable;

public class DunJiaFu implements Serializable {
    
	private Integer id;

    private String name;

    private String mainProperty;

    private String mainPropertyName;

    private String secondaryProperty;

    private String secondaryPropertyName;

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

    public String getSecondaryProperty() {
        return secondaryProperty;
    }

    public void setSecondaryProperty(String secondaryProperty) {
        this.secondaryProperty = secondaryProperty == null ? null : secondaryProperty.trim();
    }

    public String getSecondaryPropertyName() {
        return secondaryPropertyName;
    }

    public void setSecondaryPropertyName(String secondaryPropertyName) {
        this.secondaryPropertyName = secondaryPropertyName == null ? null : secondaryPropertyName.trim();
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
        DunJiaFu other = (DunJiaFu) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getName() == null ? other.getName() == null : this.getName().equals(other.getName()))
            && (this.getMainProperty() == null ? other.getMainProperty() == null : this.getMainProperty().equals(other.getMainProperty()))
            && (this.getMainPropertyName() == null ? other.getMainPropertyName() == null : this.getMainPropertyName().equals(other.getMainPropertyName()))
            && (this.getSecondaryProperty() == null ? other.getSecondaryProperty() == null : this.getSecondaryProperty().equals(other.getSecondaryProperty()))
            && (this.getSecondaryPropertyName() == null ? other.getSecondaryPropertyName() == null : this.getSecondaryPropertyName().equals(other.getSecondaryPropertyName()))
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
        result = prime * result + ((getSecondaryProperty() == null) ? 0 : getSecondaryProperty().hashCode());
        result = prime * result + ((getSecondaryPropertyName() == null) ? 0 : getSecondaryPropertyName().hashCode());
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
        sb.append(", secondaryProperty=").append(secondaryProperty);
        sb.append(", secondaryPropertyName=").append(secondaryPropertyName);
        sb.append(", remark=").append(remark);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}